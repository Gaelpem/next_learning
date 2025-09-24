import Cart from "../components/Cart";
import DynamicCartItem from "../components/DynamicCartItem";


export default function Home() {
  return (

      <>
          <header>
            <Cart>
              <DynamicCartItem id={1}/>
              <DynamicCartItem  id={2}/>
              <DynamicCartItem id={3}/>
            </Cart>
          </header>
          <main>
          <h1>
          Some dummy app
          </h1>
          </main>
        
    
      </>
  
  )

}
