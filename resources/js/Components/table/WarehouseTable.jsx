import { WarehouseData } from "@/Data/WareHouseData"
import Table from "../Table"

const WarehouseTable = () => {
  return (
    <div>
        <Table columns={WarehouseData.columns} data={WarehouseData.data}/>
    </div>
  )
}

export default WarehouseTable