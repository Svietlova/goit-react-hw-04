import css from './Filters.module.css';

const Filters = ({
  orientation,
  color,
  content_filter,
  order_by,
  handleSetOrientation,
  handleSetColor,
  handleSetContentFilter,
  handleSetOrderBy,
  resetFilters,
}) => {

  return (
    <div className={css.filters}>
      <label className={css.label} htmlFor="orientation">
        Orientation:
        <select
          className={css.select}
          value={orientation}
          name="orientation"
          id="orientation"
          onChange={handleSetOrientation}
        >
          <option value="">-</option>
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="squarish">Squarish</option>
        </select>
      </label>
      <label className={css.label} htmlFor="color">
        Color:
        <select
          className={css.select}
          value={color}
          name="color"
          id="color"
          onChange={handleSetColor}
        >
          <option value="">-</option>
          <option value="black_and_white">black and white</option>
          <option value="black">black</option>
          <option value="white">white</option>
          <option value="yellow">yellow</option>
          <option value="orange">orange</option>
          <option value="red">red</option>
          <option value="purple">purple</option>
          <option value="magenta">magenta</option>
          <option value="green">green</option>
          <option value="teal">teal</option>
          <option value="blue">blue</option>
        </select>
      </label>
      <label className={css.label} htmlFor="content">
        Content:
        <select
          className={css.select}
          value={content_filter}
          name="content"
          id="content"
          onChange={handleSetContentFilter}
        >
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </label>
      <label className={css.label} htmlFor="order">
        Order:
        <select
          className={css.select}
          value={order_by}
          name="order"
          id="order"
          onChange={handleSetOrderBy}
        >
          <option value="relevant">Relevant</option>
          <option value="latest">Latest</option>
        </select>
      </label>
      <button className={css['reset-btn']} onClick={resetFilters} type="button">
        Reset
      </button>
    </div>
  );
};

export default Filters;