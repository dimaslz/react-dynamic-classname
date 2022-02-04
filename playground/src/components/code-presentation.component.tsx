export const CodePresentationComponent = ({ description = "", title = "", snippets = [] }: any) => {

	return <div className="dark:bg-gray-900 bg-white rounded w-full">
		<div className="flex h-full flex-col">
			<h2 className="text-xl mb-2 dark:text-white text-gray-800">{ title }</h2>
				<div className="text-xs h-full">
					{snippets.map((snippet: any) => {
						if (snippet.type === 'html') {
							snippet.type = 'xml';
						}

						return snippet;
					}).map((snippet: any, key: number) => <pre className="flex w-full h-full" key={key}>
					<code
							className={`language-${snippet.type} hljs rounded-lg dark:bg-gray-800 bg-gray-200 w-full`} dangerouslySetInnerHTML={{ __html: snippet.code }}>
					</code>
				</pre>)}
			</div>

			{description && <div className="text-xs mt-2 dark:text-white text-gray-800" dangerouslySetInnerHTML={{ __html: description }}>
			</div>}
		</div>
	</div>
}

export default CodePresentationComponent;