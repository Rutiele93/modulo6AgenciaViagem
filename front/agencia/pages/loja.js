import React from 'react'

export default function () {
  return (
	<div>
		<main className="container-fluid bd-navbar">
 			<table className="container-fluid" style={{ height: 100 }}>
				<tbody>
				<tr>
					<td className="text-center">
					<img className="rounded" src="../img/logo-age.png" width="200px" />
					<h1 className="text-center">Encotre uma loja Perto de Você.</h1>
					<a className="text-center" target="_blank"
						href="https://www.google.com/maps/@-23.4946468,-46.510509,15z?authuser=0&entry=ttu">
						<img className="rounded" src="./img/mapa.png" width="200px" />
					</a>
					</td>
				</tr>
				</tbody>
  			</table>
		</main>
	</div>
  )
}

