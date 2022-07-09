import Chip from '@material-ui/core/Chip';

const filterOptions = [
  { type: "All", selected: true },
  { type: "Electronics", selected: false },
  { type: "Computers", selected: false },
  { type: "Mechanics", selected: false },
  { type: "Aeronautics", selected: false },
  { type: "Metallurgy", selected: false }
];

export default function FilterVideos() {

  return (
    <div style={{ padding: '10px', display: 'inline' }} >
      {
        filterOptions.map((filterType, index) =>
          <Chip
            clickable
            color={filterType.selected ? "primary" : "default"}
            style={{ margin: '10px 5px' }}
            key={index} label={filterType.type}
          />
        )
      }
    </div>
  )
}
