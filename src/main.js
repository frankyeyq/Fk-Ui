import Tab from './components/Tab/index';
import Button from './components/Button/index';
import { Radio, RadioGroup } from './components/Radio/index';
import { Checkbox, CheckboxGroup } from './components/Checkbox/index';
import Input from './components/Input/index';
import InputNumber from './components/InputNumber/index';
import { Select, SelectOption } from './components/Select/index';
import Tag from './components/Tag/index';
import Switch from './components/Switch/index';
import Slide from './components/Slide/index';
import DatePicker from './components/DatePicker/index';
import ColorPicker from './components/ColorPicker/index';
import Pagination from './components/Pagination/index';
import { Form, FormItem } from './components/Form/index';
import { Carousel, CarouselItem } from './components/Carousel/index';
import { Table, TableColumn } from './components/Table/index';

// import './style/common/common.css';

const components = [
  Tab,
  Button,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Input,
  InputNumber,
  Select,
  SelectOption,
  Tag,
  Switch,
  Slide,
  DatePicker,
  ColorPicker,
  Form,
  FormItem,
  Carousel,
  CarouselItem,
  Pagination,
  Table,
  TableColumn
];

const install = function (Vue) {
  if (install.installed) return;
  components.map((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  version: '0.1.0',
  install
};
