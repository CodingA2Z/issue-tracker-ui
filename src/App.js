import logo from './logo.svg';
import './App.css';
import IssueForm from './IssueForm';
import IssueList from './IssueList';
function App() {
  return (
    <div className="App">
     <h1>My Issue Tracker</h1>
     <IssueForm />
     <IssueList />
    </div>
  );
}

export default App;
