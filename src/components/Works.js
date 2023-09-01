import Card from "./Card";
import {projects} from '../api/projects';

function Works() {

  return (
    <div className="bg-blue-200 grid grid-cols-1 gap-4 md:grid-cols-3 p-10">
      {
        projects.map(() => {
          return <Card 
          img="https://ericgaona.com/images/clover.jpg" 
          title="Test" description="Esto es una descripcion" />
        })
      }
    </div>
  )
}

export default Works;
