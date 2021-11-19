import G6 from '@antv/g6';
import {isNumber, isArray} from '@antv/util';
import {ref, onMounted} from 'vue'
import utils from 'aki_js_utils'

export default function () {
    // 图形对象
    let graph;
    // 定义数据源
    const data = {
        // 点集
        nodes: [
            {
                id: 'node1',
                x: 100,
                y: 200,
            },
            {
                id: 'node2',
                x: 300,
                y: 200,
            },
        ],
        // 边集
        edges: [
            // 表示一条从 node1 节点连接到 node2 节点的边
            {
                source: 'node1',
                target: 'node2',
            },
        ],
    };


    const init = function () {
        // 创建 G6 图实例
        graph = new G6.Graph({
            container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
            // 画布
            renderer: 'canvas', // 渲染类型 canvas 和 svg
            width: 200,// 画布宽
            height: 200,// 画布高
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

        });
        // 读取数据
        graph.data(data);
        // 渲染图
        graph.render();
    }

    const refresh = function () {
        data.nodes[0].x = utils.randomFlow(50, 100, 0)
        data.nodes[0].y = utils.randomFlow(150, 200, 0)
        // 读取数据
        graph.data(data);
        // 渲染图
        graph.render();
    }

    onMounted(() => {
        init()
        setInterval(() => {
            refresh()
        }, 1000)
    })
}