function Posts({ posts }) {
	return (
		<div>

			<a href="/">Go Home</a>
			<a href="/about">Go About</a>

			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						{post.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export async function getStaticProps() {
	const res = await fetch('https://61ba468748df2f0017e5aa2b.mockapi.io/items')
	const posts = await res.json()

	return {
		props: {
			posts,
		}
	}
}

export default Posts