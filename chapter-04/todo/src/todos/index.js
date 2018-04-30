import * as actions from './actions.js';
import reducer from './reducer.js';
import view from './views/todos.js';

export { actions, reducer, view };
// 导入时：
//  import { actions, reducer, view } from './todoList'

// 如果是 export default 默认导出方式，
// export default { actions, reducer, view };
// 那么导入的时候，就不能使用拆包表达式了：
// import TodoListComponent from './todoList'