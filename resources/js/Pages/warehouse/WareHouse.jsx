import PrimaryButton from "@/Components/PrimaryButton"
import WarehouseTable from "@/Components/table/WarehouseTable"
import LayOut from "@/Layouts/LayOut"


const Warehouse = () => {
  return (
    <LayOut>

    <div>
      <div className='p-6'>
      <div>
        <div>
          <PrimaryButton></PrimaryButton>
          <PrimaryButton> Create Warehouse</PrimaryButton>
        </div>
      </div>
      <WarehouseTable/>
    </div>
    </div>
    </LayOut>
  )
}

export default Warehouse