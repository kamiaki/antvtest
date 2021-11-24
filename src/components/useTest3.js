import G6 from '@antv/g6';
import {ref, onMounted} from 'vue'
import utils from 'aki_js_utils'
import Mydata from './useTest3Data.js'

export default function () {
    // 图形对象
    let graph;
    // 定义数据源
    const data = Mydata;

    // 实例化 minimap 插件
    const minimap = new G6.Minimap({
        size: [100, 100],
        className: 'minimap',
        type: 'delegate',
    });

    const init = function () {
        // 创建 G6 图实例
        graph = new G6.Graph({
            container: 'container3', // 指定图画布的容器 id，与第 9 行的容器对应
            // 插件
            plugins: [minimap], // 将 minimap 实例配置到图上
            // 画布
            renderer: 'canvas', // 渲染类型 canvas 和 svg
            fitView: true, // 图片自适应画布
            fitViewPadding: 10, // 图自适应画布时的四周留白像素值
            fitCenter: true, // 是否平移图使其中心对齐到画布中心
            // 全局元素配置
            defaultNode: {
                type: 'rect', // 节点图形
                // ... 其他属性
                style: {
                    fill: '#fa8d8d',// 节点填充色
                    stroke: '#eaff8f',// 节点的描边颜色
                    lineWidth: 5,// 描边宽度
                },
            },
            // 全局自定义边集样式
            defaultEdge: {
                // ... 其他属性
                style: {
                    stroke: '#eaff8f',
                    lineWidth: 5,
                    // ... 其他样式属性
                },
            },
            // 定义鼠标放上去改变状态之后对应的颜色
            nodeStateStyles: {
                hover: {
                    // keyShape 的状态样式
                    fill: '#d3adf7',
                    // name 为 node-label 的子图形在该状态值下的样式
                    'node-label': {
                        fontSize: 15
                    },
                },
            },
            // 配置布局方式
            layout: {
                // Object，可选，布局的方法及其配置项，默认为 random 布局。
                type: 'force',
                duration: 500, // Number，一次动画的时长
                preventOverlap: true,
                nodeSize: 30,
                // workerEnabled: true, // 是否启用 webworker
                // gpuEnabled: true // 是否使用 gpu 版本的布局算法，G6 4.0 支持，目前仅支持 gForce 及 fruchterman
                // ...                    // 其他配置
            },
            // 模式 定义了两种模式
            // graph.setMode('edit'); 通过这个方法切换到编辑模式 然后就不能作坊了
            modes: {
                // 支持的 behavior
                default: ['drag-canvas', 'zoom-canvas'],
                edit: ['click-select'],
            },
            // 动画时间
            animate: true, // Boolean，切换布局时是否使用动画过度，默认为 false
            animateCfg: {
               easing: 'linearEasing', // String，动画函数
            },
        });
        // 鼠标放上去改变状态的事件
        graph.on('node:mouseenter', (evt) => {
            const {item} = evt;
            graph.setItemState(item, 'hover', true);
        });
        graph.on('node:mouseleave', (evt) => {
            const {item} = evt;
            graph.setItemState(item, 'hover', false);
        });
        // 读取数据
        graph.data(data);
        // 渲染图
        graph.render();
    }

    onMounted(() => {
        init()
    })
}
