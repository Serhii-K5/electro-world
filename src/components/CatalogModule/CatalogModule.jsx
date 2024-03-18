import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDirectoryPath } from "redux/selectors";
import categories from 'assets/json/categories.json';
import { addDirectoryPath, deleteDirectoryPath } from 'redux/slice/directoryPathSlice';


const CatalogModule = ({ onClose }) => {
  const dispatch = useDispatch();
  const directoryPath = useSelector(selectDirectoryPath);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const addDirectory = value => {
    dispatch(addDirectoryPath(value));
  };

  const deleteDirectory = value => {
    value.cat_id === directoryPath[directoryPath.length - 1].cat_id &&
      dispatch(deleteDirectoryPath(value));
  };

  return (
    <>
      {directoryPath && (
        <ul style={{ display: 'flex' }}>
          {directoryPath.map(
            (el, index) =>
              el.cat_id === categories.id && <li key={index}>{el.cat_name}</li>
          )}
        </ul>
      )}
      {categories.length > 0 && (
        <ul style={{ display: 'flex' }}>
          {directoryPath && (
            <ul style={{ display: 'flex' }}>
              {directoryPath.map((el, index) => (
                <li key={index}>
                  <categoriesSelection
                    parentId={el.cat_parentId}
                    onMouseMove={() => addDirectory(el)}
                    onMouseLeave={() => deleteDirectory(el)}
                  />
                </li>
              ))}
            </ul>
          )}
        </ul>
      )}
    </>
  );
};

export default CatalogModule;
