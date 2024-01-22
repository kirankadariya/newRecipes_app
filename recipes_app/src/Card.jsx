export function Card (props){
    return (
        <div >   <header> Header</header>
                 <main style = {{border:"solid red 2px "}}>{props.children}</main>
    
               
    
    <footer> footer </footer>
    </div>
    )
}