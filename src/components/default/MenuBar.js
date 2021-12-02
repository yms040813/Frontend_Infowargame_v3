import MBarProviders from "../../providers/MBarProviders"
import DefaultTemplete from "./MenuBarDetail"

const MenuBar = (params) => {
  return (
    <MBarProviders>
      <DefaultTemplete page={params.page} />
    </MBarProviders>
  )
}

export default MenuBar