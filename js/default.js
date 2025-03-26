		
        const { createApp, ref } = Vue

        const students = all.split(',')
        createApp({
            setup() {
                const historyList = ref([])
                const myVideo = ref(null)
                const message = ref('fsadasdas')
                const isShow = ref(false)
                const studentsBoxShow = ref(false)
                let id = 0
                const thisName = ref('')
                const nameShow = ref(false)
                const nameClass = ref(['name'])
                let timer = null
				var videosrc = ref('./util/video/blue.mp4') // 默认视频路径，随便写的，只要非空且存在就行。
				var temp = " "
				
                function setTimer (){
                    if(timer !== null){
                        clearTimeout(timer)
                    }
                    timer = setTimeout(() => {
                        nameClass.value.push('active')
                 
                    }, 100)
                }
                function removeI(item){
                    let index = nameClass.value.indexOf(item)
                    if(index!=-1){
                
                        nameClass.value.splice(index,1)
                    }
                }

                function makeRandom(min, max) { 
                    return Math.floor(Math.random() * (max - min + 1) + min)
                }



               function asn() {
                   isShow.value = false
                   studentsBoxShow.value = true
                   nameShow.value = true
                   setTimer()
                   for (let item in students[id]) {
                       if (item === students[id].length - 1) {
                           thisName.value += students[id][item] + ' '
                       } else {
                           thisName.value += students[id][item] + ' '
                       }
                   }
               }

                function init(){
                    isShow.value = false
                    studentsBoxShow.value = false
                    nameShow.value = false
                    removeI('active')
                
                }
                const handleDrew = ()=>{
					isShow.value = true
					id = makeRandom(0, students.length)
					    temp = students[id] // 更新当前抽取的名字
						if (normal.includes(temp)) {
						    videosrc.value = "./util/video/blue.mp4"
							
						}else if (committe.includes(temp)) {
						    videosrc.value = "./util/video/purple.mp4"
							
						}else if (monitor.includes(temp)) {
						    videosrc.value = "./util/video/gold.mp4"
							
						}
                    myVideo.value.play()
                }
 
                const VideoEnd = () => {
					asn()
                    historyList.value.push(thisName.value)

                }
                
                const toInit = ()=>{
                    thisName.value = ''
                    init()
                }


                return {
                    message,
                    historyList,
                    handleDrew,
                    myVideo,
                    isShow,
                    VideoEnd,
                    studentsBoxShow,
                    thisName,
                    nameShow,
                    toInit,
                    nameClass,
					videosrc
                }
            }
        }).mount('#app')