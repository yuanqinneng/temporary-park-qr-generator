
import { FormItem } from 'ant-design-vue/types/form/form-item';

const ant = {
    install: function (Vue) {
        Vue.use(message);
        Vue.component(Button.name, Button);
        Vue.component(Form.name, Form);
        Vue.component(Input.name, Input);
        Vue.component(FormItem.name, FormItem);
        Vue.prototype.$message = message;
    }
};
export default ant