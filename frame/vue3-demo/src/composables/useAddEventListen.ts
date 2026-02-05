import {unref, watch} from "vue"
export function useEventListener(...args:any){
    let target = typeof args[0] === 'string' ? window : args.shift()
    return watch(()=>unref(target), (element, _, onCleanuup)=>{
        if(!element) return
        element.addEventListener(...args)
        onCleanuup(()=>{
            element.removeEventListener(...args)
        })
    },{
        immediate: true
    })
}