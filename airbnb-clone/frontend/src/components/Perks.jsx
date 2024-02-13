const Perks = ({ selected, onChange }) => {
  const handleCbClick = (e) => {
    e.preventDefault();
    const { checked, name } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  };

  return (
    <>
      <label
        id="wifi"
        className="border p-4 flex gap-2 items-center cursor-pointer"
      >
        <input type="checkbox" name="wifi" onChange={handleCbClick} />
        <span>Wifi</span>
      </label>
      <label
        id="TV"
        className="border p-4 flex gap-2 items-center cursor-pointer"
      >
        <input type="checkbox" name="TV" onChange={handleCbClick} />
        <span>TV</span>
      </label>
      <label
        id="parking"
        className="border p-4 flex gap-2 items-center cursor-pointer"
      >
        <input type="checkbox" name="Parking" onChange={handleCbClick} />
        <span>Free&nbsp;Parking&nbsp;spot</span>
      </label>
      <label
        id="private"
        className="border p-4 flex gap-2 items-center cursor-pointer"
      >
        <input type="checkbox" name="private" onChange={handleCbClick} />
        <span>private&nbsp;Enterence</span>
      </label>
      <label
        id="pets"
        className="border p-4 flex gap-2 items-center cursor-pointer"
      >
        <input type="checkbox" name="pets" onChange={handleCbClick} />
        <span>pets</span>
      </label>
      <label
        id="radio"
        className="border p-4 flex gap-2 items-center cursor-pointer"
      >
        <input type="checkbox" name="radio" onChange={handleCbClick} />
        <span>Radio</span>
      </label>
    </>
  );
};

export default Perks;
