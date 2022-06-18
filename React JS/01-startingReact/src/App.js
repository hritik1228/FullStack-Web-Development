import ExpenseItem from "./components/ExpenseItem";


function App() {

    const expenses=[
        {title:'car insurance'}
    ]


    return ( 
        <div>
            <h2> Let 's get started!</h2>
            <ExpenseItem></ExpenseItem>
            <ExpenseItem></ExpenseItem>
            <ExpenseItem></ExpenseItem>
            <ExpenseItem></ExpenseItem>
        </div >
    );
}

export default App;