import Vue from 'vue'
import {
  Pagination,
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  Switch,
  Button,
  Table,
  TableColumn,
  Alert,
  Icon,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Message,
  MessageBox
} from 'element-ui'

export default () => {
  Vue.use(Pagination)
  Vue.use(Dialog)
  Vue.use(Menu)
  Vue.use(Submenu)
  Vue.use(MenuItem)
  Vue.use(MenuItemGroup)
  Vue.use(Input)
  Vue.use(Switch)
  Vue.use(Button)
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Alert)
  Vue.use(Icon)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Container)
  Vue.use(Header)
  Vue.use(Aside)
  Vue.use(Main)
  // message与messageBox组件不能用use引入，只能挂载vue实例上，否则有bug
  Vue.prototype.$message = Message;
  Vue.prototype.$msgbox = MessageBox;
}
