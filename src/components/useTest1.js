import G6 from '@antv/g6';
import { isNumber, isArray } from '@antv/util';
import {ref, onMounted} from 'vue'

export default function () {
    const a = ref(0)
    onMounted(() => {
        console.log('test1 mounted!')
    })
    return {a}
}