import PrimaryButton from "@/Components/PrimaryButton"
import WarehouseTable from "@/Components/table/WarehouseTable"


const Warehouse = () => {
  return (
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
  )
}

export default Warehouse