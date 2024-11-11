import React, {useState, useEffect} from 'react';
import { ReactPictureAnnotation } from 'react-picture-annotation';
export function PictureAnnotation(props) {

    const [pageSize, setPageSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      });
      const onResize = () => {
        setPageSize({ width: window.innerWidth, height: window.innerHeight });
      };
     
      useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
      }, []);
     
      const onSelect = selectedId => console.log(selectedId);
      const onChange = data => console.log(data);
    return (

        <div className="App">
        <ReactPictureAnnotation
          image="./img/millcreekfloorplan.jpg"
          onSelect={onSelect}
          onChange={onChange}
          width={pageSize.width}
          height={pageSize.height}
        />
      </div>

    );

}