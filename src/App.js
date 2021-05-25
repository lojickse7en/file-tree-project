
import React, {useState} from 'react';

//javascript function here is the same as a 'react component'
function App() { 
  return <div>  
    {/* <Folder food='cake' drink='coffee'/> takes in arguments/data from the function below into this react component */}
    <Folder name="Desktop">
     <Folder name="Music">
        <File name="all_star.mp3"/>
        <File name="express_file.mp3"/>
      </Folder>
      <File name="dogs.jpeg"/>
      <File name="cats.png"/>
    </Folder>
    <Folder name="Applications"/>
  </div>
}

//A way to render this component is to add the self closed 'html tag' in the App function above. In other words, the App component above is rendering the Folder component below.
const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true);
  
  
 // console.log(props);
  // const name = 'my_desktop';
  // return <h4>{name}</h4> // the curly braced are there so the 'name' variable evaluatees at the value 'my_desktop' and not 'name'
  const {name, children} = props;
  const direction = isOpen ? 'down' : 'right';
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>

    </span>
    {name}
    
    <div style={{marginLeft: '17px'}}>
       {isOpen ? children : null}  
    </div>
      
  </div>
}; 

const File = (props) => {
const {name} = props;
const fileExtension = name.split('.')[1];
const fileIcons = {
  mp3: 'headphones',
  jpeg: 'file image',
  png: 'file image outline',
};

  return <div ><i className={`${fileIcons[fileExtension]} icon`}></i>
  {name}
  </div>
};
export default App;

