import Head from "next/head"
import { makeStyles } from "@material-ui/core/styles"
import styles from "@/styles/Home.module.css"

import CharTable from "@/components/Table"

const useStyles = makeStyles((theme) => ({
	title: {
		color: theme.palette.primary.main,
	},
}))

export default function Home() {
	const classes = useStyles()

	return (
		<>
			<Head>
				<title>Star Wars' Characters</title>
				<meta
					name="description"
					content="All of the characters in the Star Wars movies"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<main className={styles.main}>
				<h1 className={classes.title}>Star Wars</h1>
				<CharTable />
			</main>
		</>
	)
}
