const data = [
	{
		id: "cGVvcGxlOjE=",
		name: "Luke Skywalker",
		eyeColor: "blue",
		height: 172,
		gender: "male",
		birthYear: "19BBY",
		homeworld: {
			id: "cGxhbmV0czox",
			name: "Tatooine",
		},
		species: null,
		filmConnection: {
			totalCount: 4,
		},
	},
	{
		id: "cGVvcGxlOjI=",
		name: "C-3PO",
		eyeColor: "yellow",
		height: 167,
		gender: "n/a",
		birthYear: "112BBY",
		homeworld: {
			id: "cGxhbmV0czox",
			name: "Tatooine",
		},
		species: {
			id: "c3BlY2llczoy",
			name: "Droid",
		},
		filmConnection: {
			totalCount: 6,
		},
	},
	{
		id: "cGVvcGxlOjM=",
		name: "R2-D2",
		eyeColor: "red",
		height: 96,
		gender: "n/a",
		birthYear: "33BBY",
		homeworld: {
			id: "cGxhbmV0czo4",
			name: "Naboo",
		},
		species: {
			id: "c3BlY2llczoy",
			name: "Droid",
		},
		filmConnection: {
			totalCount: 6,
		},
	},
	{
		id: "cGVvcGxlOjQ=",
		name: "Darth Vader",
		eyeColor: "yellow",
		height: 202,
		gender: "male",
		birthYear: "41.9BBY",
		homeworld: {
			id: "cGxhbmV0czox",
			name: "Tatooine",
		},
		species: null,
		filmConnection: {
			totalCount: 4,
		},
	},
	{
		id: "cGVvcGxlOjU=",
		name: "Leia Organa",
		eyeColor: "brown",
		height: 150,
		gender: "female",
		birthYear: "19BBY",
		homeworld: {
			id: "cGxhbmV0czoy",
			name: "Alderaan",
		},
		species: null,
		filmConnection: {
			totalCount: 4,
		},
	},
	{
		id: "cGVvcGxlOjY=",
		name: "Owen Lars",
		eyeColor: "blue",
		height: 178,
		gender: "male",
		birthYear: "52BBY",
		homeworld: {
			id: "cGxhbmV0czox",
			name: "Tatooine",
		},
		species: null,
		filmConnection: {
			totalCount: 3,
		},
	},
	{
		id: "cGVvcGxlOjc=",
		name: "Beru Whitesun lars",
		eyeColor: "blue",
		height: 165,
		gender: "female",
		birthYear: "47BBY",
		homeworld: {
			id: "cGxhbmV0czox",
			name: "Tatooine",
		},
		species: null,
		filmConnection: {
			totalCount: 3,
		},
	},
	{
		id: "cGVvcGxlOjg=",
		name: "R5-D4",
		eyeColor: "red",
		height: 97,
		gender: "n/a",
		birthYear: "unknown",
		homeworld: {
			id: "cGxhbmV0czox",
			name: "Tatooine",
		},
		species: {
			id: "c3BlY2llczoy",
			name: "Droid",
		},
		filmConnection: {
			totalCount: 1,
		},
	},
	{
		id: "cGVvcGxlOjk=",
		name: "Biggs Darklighter",
		eyeColor: "brown",
		height: 183,
		gender: "male",
		birthYear: "24BBY",
		homeworld: {
			id: "cGxhbmV0czox",
			name: "Tatooine",
		},
		species: null,
		filmConnection: {
			totalCount: 1,
		},
	},
	{
		id: "cGVvcGxlOjEw",
		name: "Obi-Wan Kenobi",
		eyeColor: "blue-gray",
		height: 182,
		gender: "male",
		birthYear: "57BBY",
		homeworld: {
			id: "cGxhbmV0czoyMA==",
			name: "Stewjon",
		},
		species: null,
		filmConnection: {
			totalCount: 6,
		},
	},
]

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	withStyles,
	makeStyles,
} from "@material-ui/core"

const StyledTableCell = withStyles((theme) => ({
	root: {
		padding: "8px",
	},
	head: {
		backgroundColor: theme.table.header.bgColor,
		color: theme.table.header.textColor,
		fontWeight: theme.table.header.fontWeight,
	},
	body: {
		borderBottomColor: theme.table.row.bottomBorder,
	},
}))(TableCell)

const useStyles = makeStyles((theme) => ({
	root: {
		"&:nth-of-type(even)": {
			backgroundColor: theme.table.row.primaryColor,
		},
		"&$hover:hover": {
			backgroundColor: theme.table.row.hoverBgColor,
			cursor: "pointer",
		},
	},

	hover: {},
}))

const CharTable = () => {
	const classes = useStyles()

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<StyledTableCell>Name</StyledTableCell>
						<StyledTableCell>Eye Color</StyledTableCell>
						<StyledTableCell>Height</StyledTableCell>
						<StyledTableCell>Gender</StyledTableCell>
						<StyledTableCell>Birth Year</StyledTableCell>
						<StyledTableCell>Homeworld</StyledTableCell>
						<StyledTableCell>Species</StyledTableCell>
						<StyledTableCell>Number of Films</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow
							hover
							key={row.id}
							classes={{ root: classes.root, hover: classes.hover }}
							onClick={() => alert("You have clicked row " + row.name)}
						>
							<StyledTableCell>{row.name}</StyledTableCell>
							<StyledTableCell>
								{row.eyeColor[0].toUpperCase() + row.eyeColor.substring(1)}
							</StyledTableCell>
							<StyledTableCell>{row.height}</StyledTableCell>
							<StyledTableCell>
								{row.gender === "n/a"
									? "-"
									: row.gender[0].toUpperCase() + row.gender.substring(1)}
							</StyledTableCell>
							<StyledTableCell>
								{row.birthYear === "unknown" ? "-" : row.birthYear}
							</StyledTableCell>
							<StyledTableCell>{row.homeworld.name}</StyledTableCell>
							<StyledTableCell>
								{row.species ? row.species.name : "-"}
							</StyledTableCell>
							<StyledTableCell>{row.filmConnection.totalCount}</StyledTableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default CharTable
