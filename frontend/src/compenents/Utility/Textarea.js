function Textarea({
  value,
  rows,
  txt,
  center,
  onChange,
  onChangeComment,
  defaultValue,
  readonly,
}) {
  const HandleChangeComment = (v) => {
    onChangeComment(v.target.value);
  };

  return (
    <textarea
      className={
        center
          ? 'mx-2 px-2 textarea-comment text-center'
          : 'mx-2 px-2 textarea-comment'
      }
      style={{ width: '100%' }}
      rows={rows}
      cols="50"
      onChange={onChange ? onChange : HandleChangeComment}
      defaultValue={defaultValue}
      placeholder={txt}
      value={value}
      readOnly={readonly ? true : false}
    ></textarea>
  );
}

export default Textarea;
