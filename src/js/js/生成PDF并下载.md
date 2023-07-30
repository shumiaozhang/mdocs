前端技术使网页生成PDF预览并下载，使用`jsPDF`、`html2Canvas`，调用`getPdfFun()`即可。


```js
import {createApp, reactive, toRefs} from "vue";
import jsPDF from "jspdf";
import html2Canvas from "html2canvas";
setup() {
    const state = reactive({
        htmlTitle: 'PDF文件名',
        Height: document.documentElement.clientHeight - 180,
        pdfProgress: 1,
        pdfPage: 1,
        pdfTotal: null,
        type: '01', // 01预览 02下载
        pdfContent: { content: '我是内容' },
        isDownloaded: false, // 是否生成PDF
        isOver: false, // 是否生成完毕
        a4Width: 415.28,
        // a4Width: 595.28,
        a4Height: 841.89,
        pdf: null,
        canvas: [],
        a4HeightRef: 0,
        position: 0,
        leftHeight: 0,
        pageFooter: null,
        canvasFooter: null,
        pageTitle: null,
        canvasTitle: null,
        canvasIndex: 0,
        pageData: null,
        isAddPage: false,
        canvas1: null,
        list: [],
    })
    const getPdfFun = () => {
        // 初始化PDF
        state.pdf = new jsPDF('', 'pt', 'a4')
        state.pdf.page = 1
        state.pdf.setDisplayMode('fullwidth', 'continuous', 'FullScreen')
        state.isDownloaded = true
        if (state.type === '01') {
            console.log(state.pdf, 'pdfthis');
            getPdf(state.htmlTitle, true)
        } else if (state.type === '02') {
            getPdf(state.htmlTitle, false)
        }
    };
    const getPdf = async (title, show) => {
        // 生成页眉图片
        state.canvasTitle = await html2Canvas(document.getElementById('title'))
        state.pageTitle = state.canvasTitle.toDataURL('image/jpeg', 1.0)
        // 生成内容 6个案件点的图片
        const doms = document.getElementsByClassName('casepoint')
        console.log(doms, 'doms');
        for (let i = 0; i < doms.length; i++) {
            if (doms[i]) {
                const canvas = await html2Canvas(doms[i], {
                    allowTaint: true,
                    scale: 2
                })
                state.canvas.push(canvas)
            }
        }
        state.canvas1 = document.createElement('canvas')
        // 一页pdf显示html页面生成的canvas高度; -300为了每页PDF头部和底部留有空位
        state.a4HeightRef = Math.floor(state.canvas[0].width / state.a4Width * state.a4Height)-200;
        state.position = 0
        addPage()
        for (let canvasIndex = 0; canvasIndex < state.canvas.length; canvasIndex++) {
            state.position = 0
            // 未生成pdf的html页面高度
            state.leftHeight = state.canvas[canvasIndex].height
            createImpl(state.canvas[canvasIndex])
        }
        const that = this
        // 根据生成的页数，给每一页PDF加上页码
        state.isAddPage = true
        for (let page = 0; page <= state.pdfProgress; page++) {
            state.canvasFooter = await html2Canvas(document.getElementById('footer'))
            state.pageFooter = state.canvasFooter.toDataURL('image/jpeg', 1.0)
            state.pdf.setPage(page)
            if (state.pdfPage < state.pdfProgress) {
                state.pdfPage++
            }
            // 添加页眉
            state.pdf.addImage(state.pageTitle, 'JPEG', 90, 40, state.a4Width, (state.a4Width / state.canvasTitle.width * state.canvasTitle.height).toFixed(2) / 1)
            // 添加页码
            state.pdf.addImage(state.pageFooter, 'JPEG', 90, state.a4Height-40, state.a4Width, (state.a4Width / state.canvasFooter.width * state.canvasFooter.height).toFixed(2) / 1)
        }
        // 所有内容都生成完毕
        if (!show) {
            // 直接下载
            that.pdf.save(title + '.pdf')
            that.isOver = true
        } else {
            // 在新窗口查看 pdf文件
            window.open(that.pdf.output('bloburl'))
            that.isOver = true
        }
        that.init();
    };
    const createImpl = async (canvas) => {
        console.log('这页PDF剩余的高度', state.a4LeftHeight)
        console.log('canvas剩余的高度', state.leftHeight)
        console.log('canvas开始截取的位置高度', state.position)
        if (state.leftHeight > 0) {
            if (state.leftHeight > state.a4LeftHeight) {
                var checkCount = 0
                var i = state.position + state.a4LeftHeight
                // 从定好的高度页面，底部开始循环遍历canvas的每个点，找到可以截断的地方
                for (i; i >= state.position; i--) {
                    var count = 0
                    var isWrite = true
                    for (var j = 0; j < canvas.width; j++) {
                        var c = canvas.getContext('2d').getImageData(j, i, 1, 1).data
                        // 如果该单位的颜色不是白色c[0]  c[1]  c[2] 分别代表r g b 255
                        if (c[0] != 0xff || c[1] != 0xff || c[2] != 0xff) {
                            count++
                        }
                        // 如果这行有连续20个单位都不是白色，退出当前循环
                        if (count > 20) {
                            isWrite = false
                            break
                        }
                    }
                    // 如果有连续10行都是白色的，canvas在这里可以截断了
                    if (isWrite) {
                        checkCount++
                        if (checkCount >= 20) {
                            break
                        }
                    } else {
                        checkCount = 0
                    }
                }
                state.height = i - state.position
                if (state.height <= 0) { // 没找到截断点,新增一页PDF
                    // PDF剩余可用高度
                    state.a4LeftHeight = (state.a4HeightRef - 150).toFixed(2) / 1
                    // 先添加一张PDF
                    state.pdf.addPage()
                    state.pdfProgress = state.pdfProgress + 1
                    console.log('新增一页PDF  state.pdfProgress', state.pdfProgress)
                    state.height = state.leftHeight
                    createImpl(canvas)
                    return
                }
            } else {
                state.height = state.leftHeight
            }
            state.canvas1.width = canvas.width
            state.canvas1.height = state.height
            var ctx = state.canvas1.getContext('2d');
            ctx.drawImage(canvas, 0, state.position, canvas.width, state.height, 0, 0, canvas.width, state.height)
            console.log('canvas截断的位置', state.position, state.height)
            console.log('PDF生成的位置', state.a4HeightRef - state.a4LeftHeight, state.height)
            state.list.push(state.canvas1.toDataURL('image/jpeg', 1.0));
            state.pdf.addImage(state.canvas1.toDataURL('image/jpeg', 1.0), 'JPEG', 90, state.a4Width / state.canvas1.width * (state.a4HeightRef - state.a4LeftHeight)+26, state.a4Width, state.a4Width / state.canvas1.width * state.height)
            state.leftHeight -= state.height
            state.position += state.height
            state.a4LeftHeight -= state.height + 50
            if (state.leftHeight > 0) { // 第i个canvas还未截取完毕
                await createImpl(canvas)
                console.log(5555555555);
            }
        }
    };
    const addPage = async () => {
        // PDF页面剩余的高度
        state.a4LeftHeight = (state.a4HeightRef - 150).toFixed(2) / 1
    };
    const init = () => {
        state.pdf = null;
        state.canvas = [];
        state.isAddPage = false;
        state.pdfProgress = 1;
        state.pdfPage = 1;
        state.pdfTotal = null;
        state.canvas1 = null;
    }
    return {
        ...toRefs(state),
        getPdfFun,
    }
}
```

