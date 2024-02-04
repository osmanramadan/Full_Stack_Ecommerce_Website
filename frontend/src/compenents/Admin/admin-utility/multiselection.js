import { useEffect, useState } from 'react';
import Select from 'react-select';
import GetSubCategoryHook from '../../../hooks/subcategory/getSubCategoryHook';

function Multiselection({ subcatname, changesubcat }) {
  const [data] = GetSubCategoryHook();
  const [subcat, setSubcat] = useState();

  useEffect(() => {
    setSubcat(data.map((item) => ({ value: item.name, label: item.name })));
  }, [data]);

  const handleSelectChange = (selectedOptions) => {
    changesubcat(selectedOptions);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border:
        state.isFocused || state.isSelected
          ? '2px solid black !important'
          : '1px solid #818385 !important',
      boxShadow: state.isFocused ? 'null' : 'null',
      cursor: 'pointer',
      backgroundColor: '#F9F9F9',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#0096FB',
      borderRadius: '10px',
      paddingRight: '5px',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      borderRadius: '50%',
      ':hover': {
        backgroundColor: '#0096FB',
        color: 'white',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.data === subcat[0] ? '#0096FB' : null,
      color: state.data === subcat[0] ? 'white' : 'null',
      ':hover': {
        backgroundColor: '#0096FB',
        color: 'white',
      },
    }),
  };

  return (
    <div>
      <div className="inputfield-start mt-0 mx-1" style={{ width: '101.5%' }}>
        <Select
          isMulti
          options={subcat}
          value={subcatname}
          onChange={handleSelectChange}
          placeholder="التصنيف الفرعي"
          styles={customStyles}
          key={Math.random()}
        />
      </div>
    </div>
  );
}

export default Multiselection;
