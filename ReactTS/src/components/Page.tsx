import { ReactNode } from "react"

type propsType={
    heading:string,
    count:number,
    children:ReactNode
    // func1:(a:string)=> void
}
const Page = ({heading,count,children}:propsType) => {
    // func1("ajay");
  return (
    <div>
        <h1>{heading}</h1>
        <h3>{count}</h3>
        {children}
      
    </div>
  )
}

export default Page
