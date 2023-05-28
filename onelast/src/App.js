import logo from './logo.svg';
import './App.css';
import { books } from './books';
import Book from './Book';
function App() {
  const somevalue="shakeandBake"
  const displayValue=()=>{
    console.log(somevalue)
  }
  const getBook=(id)=>{
    const book=books.find((book)=>book.id==id)
    console.log(book)
  }
  return (
    <>
    <h1>Amazon Bestsellers</h1>
      <section className='booklist'>
        {/* <EventExamples /> */}
        {
          books.map((book,index) => {
            return (
              <Book key={book.id} {...book} displayValue={displayValue}  getBook={ getBook} number={index}/>
            )
          })
        }
      </section>
    </>
  );
}

// const EventExamples = () => {
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type='text'
//           name='example'
//           onChange={(e) => { console.log(e.target.value) }}
//           style={{ margin: '1rem 0' }}
//         />
//         <button type='submit' onClick={(e) => { e.preventDefault() }}>Submit</button>
//         <div>
//           <button type='button' onClick={() => { console.log("hello sohail") }}>click me</button>
//         </div>
//       </form>
//     </section>
//   );
// };
export default App;
