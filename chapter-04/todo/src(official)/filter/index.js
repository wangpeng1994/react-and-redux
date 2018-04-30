import * as actions from './actions.js'; // action使用命名式导出，因为可能不只一个action
import reducer from './reducer.js'; // 但一个模块中reducer应该是唯一的
import view from './views/filters.js'; // 根视图模块更应该是唯一的

export {actions, reducer, view};
