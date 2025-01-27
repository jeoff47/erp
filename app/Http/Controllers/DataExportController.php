<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

class DataExportController extends Controller
{
    public function exportData(Request $request)
    {
        $data = YourModel::all();  // Fetch data to export
        $format = $request->query('format', 'csv');  // Get format from query string, default to CSV

        if ($format === 'csv') {
            return $this->exportCsv($data);
        } elseif ($format === 'xlsx') {
            return $this->exportExcel($data);
        } else {
            return response()->json(['error' => 'Invalid format'], 400);
        }
    }

    private function exportCsv($data)
    {
        $response = new StreamedResponse(function () use ($data) {
            $handle = fopen('php://output', 'w');
            fputcsv($handle, ['Column1', 'Column2', 'Column3']);
            
            foreach ($data as $item) {
                fputcsv($handle, [$item->column1, $item->column2, $item->column3]);
            }
            fclose($handle);
        });

        $response->headers->set('Content-Type', 'text/csv');
        $response->headers->set('Content-Disposition', 'attachment; filename="data.csv"');

        return $response;
    }

    private function exportExcel($data)
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Column1');
        $sheet->setCellValue('B1', 'Column2');
        $sheet->setCellValue('C1', 'Column3');
        
        $row = 2;
        foreach ($data as $item) {
            $sheet->setCellValue('A' . $row, $item->column1);
            $sheet->setCellValue('B' . $row, $item->column2);
            $sheet->setCellValue('C' . $row, $item->column3);
            $row++;
        }

        $writer = new Xlsx($spreadsheet);
        $response = response()->stream(function () use ($writer) {
            $writer->save('php://output');
        }, 200, [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition' => 'attachment;filename="data.xlsx"',
            'Cache-Control' => 'max-age=0',
        ]);

        return $response;
    }
}
