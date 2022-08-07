import Message from './Message';

function App() {
  const message = 'Hello World!!!';
  return (
    <Message props={message} />
  );
}

export default App;
