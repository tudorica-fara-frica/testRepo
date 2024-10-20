import { useState, useEffect } from 'react'
import Input from './input/input'
import Notes from './notes/notes'
import logo from './assets/logo.svg'

function App() {
  const storedItems = JSON.parse(localStorage.getItem('item')) || [];

  const storedNotes = JSON.parse(localStorage.getItem('note')) || [];

  const initialNotes = [
    {
      id: new Date("2024-10-20T10:00:00").getTime(),
      title: "Lorem ipsum dolor sit amet.",
      detail: "Ut in mollis lectus. Vestibulum cursus elit nec elit finibus, nec consectetur magna aliquam. Nam ornare tristique commodo. Sed et pellentesque dolor, tincidunt sodales dui. Curabitur mattis dui est, id molestie orci lacinia eget. Sed fringilla et arcu id maximus. Pellentesque et elementum magna. Aenean ac efficitur est. Mauris at ex id turpis posuere laoreet. Nam id cursus mi."
    },
    {
      id: new Date("2024-10-21T12:30:00").getTime(),
      title: "Vivamus suscipit scelerisque.",
      detail: ""
    },
    {
      id: new Date("2024-10-22T14:45:00").getTime(),
      title: "Sed vel.",
      detail: "Suspendisse sit amet ex vitae nisl suscipit suscipit. Aliquam ac nisl turpis. Vivamus consequat dapibus eros non rhoncus. Donec quis facilisis urna. Vivamus elementum, dolor et blandit rutrum, libero purus maximus diam, quis tincidunt massa ante vitae velit."
    },
    {
      id: new Date("2024-10-23T16:15:00").getTime(),
      title: "Nunc a iaculis elit.",
      detail: ""
    }
  ]

  const initialItems = [
    { id: new Date("2024-08-08T17:15:45").getTime(), check: false, title: "Buy milk, bread, and eggs" },
    { id: new Date("2024-09-14T09:34:22").getTime(), check: false, title: "Wash the dishes" },
    { id: new Date("2024-02-13T13:14:16").getTime(), check: true, title: "Vacuum the floor"},
    { id: new Date("2024-10-14T09:29:04").getTime(), check: false, title: "Go to the gym" },
    { id: new Date("2024-05-08T13:23:46").getTime(), check: true, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus magna in nunc lacinia tempor. Nullam a nulla a justo accumsan consectetur non sit amet libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, mauris eu ullamcorper eleifend, augue justo rutrum dolor, ac commodo odio dolor a sapien."}
  ]
  
  const [items, setItems] = useState(storedItems.length === 0 ? initialItems : storedItems);

  const [notes, setNotes] = useState(storedNotes.length === 0 ? initialNotes : storedNotes);
  
  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('note', JSON.stringify(notes));
  }, [notes]);

  const storedToggleMenu = JSON.parse(localStorage.getItem('toggleMenu')) || 0;

  const [toggleMenu, setToggleMenu] = useState(storedToggleMenu);

  useEffect(() => {
    localStorage.setItem('toggleMenu', JSON.stringify(toggleMenu));
  }, [toggleMenu]);

  return (  
    <>
      <img src={logo} alt='logo' width={50} height={50} style={{position: "absolute", top: "10px", left: "10px" }}/>
      <div className='buttons'>
        <button onClick={() => setToggleMenu(0)} className='toggleButton'>
          To-Do List
        </button>
        <button onClick={() => setToggleMenu(1)} className='toggleButton'>
          Notes
        </button>
      </div>
      {(toggleMenu == 0) && <Input items={items} setItems={setItems} />}
      {(toggleMenu == 1) && <Notes notes={notes} setNotes={setNotes}/>}
    </>
  )
}

export default App