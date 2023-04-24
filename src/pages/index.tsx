import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import logo from '../assets/futebol.png';
import usersAvatarExampleImg from '../assets/users-avatar-example.png';
import alexsandro from '../assets/alexsandro.jpg';
import iconCheckImg from '../assets/icon-check.svg';

export default function Home() {

	return (
		<>
			<div className='max-w-[1124px] h-screen mx-auto grid grid-cols-3 items-center gap-28'>
				<main>
					<Image
						src={logo}
						alt="NLW Copa"
					/>


					<h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Top scorers!</h1>

					<div className='mt-10 flex items-left gap-2 flex-col'>

						<strong className='text-gray-100 text-xl flex items-center space-x-1'>
							<span className='text-ignite-500 space-x-1'>{1}º</span>
							<Image
								src={alexsandro}
								alt=""
								className='rounded-full space-x-1'
								width={50}
								height={50}
							/>
							<span className='text-ignite-500 space-x-1'>Leandro</span>
							<span className='text-gray-100 space-x-1'>22 gols</span>

						</strong>
						<strong className='text-gray-100 text-xl flex items-center space-x-1'>
							<span className='text-ignite-500 space-x-1'>{2}º</span>
							<Image
								src={alexsandro}
								alt=""
								className='rounded-full space-x-1'
								width={50}
								height={50}
							/>
							<span className='text-ignite-500 space-x-1'>Thiago </span>
							<span className='text-gray-100 space-x-1'>21 gols</span>
						</strong>
						<strong className='text-gray-100 text-xl flex items-center space-x-1'>
							<span className='text-ignite-500 space-x-1'>{3}º</span>
							<Image
								src={alexsandro}
								alt=""
								className='rounded-full space-x-1'
								width={50}
								height={50}
							/>
							<span className='text-ignite-500 space-x-1'>Xandy </span>
							<span className='text-gray-100 space-x-1'>14 gols</span>
						</strong>

						<strong className='text-gray-100 text-sm flex items-center space-x-1'>
							<span className='text-yellow-500 space-x-1'>{4}º</span>
							<Image
								src={alexsandro}
								alt=""
								className='rounded-full space-x-1'
								width={30}
								height={30}
							/>
							<span className='text-yellow-500 space-x-1'>Alexsandro </span>
							<span className='text-gray-100 space-x-1'>13 gols</span>
						</strong>
					</div>

				</main>

				<div>
					<h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Players of the match!</h1>

					<div className='mt-10 flex items-left gap-2 flex-col'>

						<strong className='text-gray-100 text-xl flex items-center space-x-1'>
							<span className='text-ignite-500 space-x-1'>{1}º</span>
							<Image
								src={alexsandro}
								alt=""
								className='rounded-full space-x-1'
								width={50}
								height={50}
							/>
							<span className='text-ignite-500 space-x-1'>Guilherme </span>
							<span className='text-gray-100 space-x-1'>11 votos</span>
						</strong>
						<strong className='text-gray-100 text-xl flex items-center space-x-1'>
							<span className='text-ignite-500 space-x-1'>{2}º</span>
							<Image
								src={alexsandro}
								alt=""
								className='rounded-full space-x-1'
								width={50}
								height={50}
							/>
							<span className='text-ignite-500 space-x-1'>Moacir </span>
							<span className='text-gray-100 space-x-1'>10 votos</span>
						</strong>
						<strong className='text-gray-100 text-xl flex items-center space-x-1'>
							<span className='text-ignite-500 space-x-1'>{3}º</span>
							<Image
								src={alexsandro}
								alt=""
								className='rounded-full space-x-1'
								width={50}
								height={50}
							/>
							<span className='text-ignite-500 space-x-1'>Fio </span>
							<span className='text-gray-100 space-x-1'>09 votos</span>
						</strong>

						<strong className='text-gray-100 text-sm flex items-center space-x-1'>
							<span className='text-yellow-500 space-x-1'>{3}º</span>
							<Image
								src={alexsandro}
								alt=""
								className='rounded-full space-x-1'
								width={30}
								height={30}
							/>
							<span className='text-yellow-500 space-x-1'>Thiago</span>
							<span className='text-gray-100 space-x-1'>08 votos</span>
						</strong>
					</div>
				</div>

				<div>
					<h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Games!</h1>

					<div className='flex items-center gap-2 space-x-1'>
					<div className='mt-10 flex items-left gap-2 flex-col'>
						<h5 className='mt-14 text-ignite-500 text-xl font-bold leading-tight'>Mongos x Mongos</h5>
						<strong className='text-gray-100 text-sm flex items-center space-x-1'>07 Jogos</strong>
						<strong className='text-gray-100 text-sm flex items-center space-x-1'>05 Vitórias</strong>
						<strong className='text-gray-100 text-sm flex items-center space-x-1'>00 Empate</strong>
						<strong className='text-gray-100 text-sm flex items-center space-x-1'>07 Derrotas</strong>
						<strong className='text-gray-100 text-sm flex items-center space-x-1'>126 Gols marcado</strong>
					</div>
					<div className='mt-10 flex items-left gap-2 flex-col'>
						<h5 className='mt-14 text-ignite-500 text-xl font-bold leading-tight'>Friendly match</h5>
						<strong className='text-gray-100 text-sm flex items-center space-x-1'>07 Jogos</strong>
						<strong className='text-gray-100 text-sm flex items-center space-x-1'>05 Vitórias</strong>
						<strong className='text-gray-100 text-sm flex items-center space-x-1'>00 Empate</strong>
						<strong className='text-gray-100 text-sm flex items-center space-x-1'>07 Derrotas</strong>
						<strong className='text-gray-100 text-sm flex items-center space-x-1'>126 Gols marcado</strong>
					</div>
					</div>

					<div className='mt-10 flex items-center gap-2 flex-col'>
						<strong className='text-gray-100 text-xl flex items-center space-x-1'>
							<span className='text-yellow-500 space-x-1'>Mongos A</span>
							<span className='space-x-1'>10</span>
							<span className='text-ignite-500 space-x-1'>X</span>
							<span className='space-x-1'>8</span>
							<span className='text-yellow-500 space-x-1'>Mongo B</span>
						</strong>
						<strong className='text-gray-100 text-xl flex items-center space-x-1'>
							<span className='text-yellow-500 space-x-1'>Mongos A</span>
							<span className='space-x-1'>5</span>
							<span className='text-ignite-500 space-x-1'>X</span>
							<span className='space-x-1'>5</span>
							<span className='text-yellow-500 space-x-1'>Mongo B</span>
						</strong>
						<strong className='text-gray-100 text-xl flex items-center space-x-1'>
							<span className='text-yellow-500 space-x-1'>Mongos A</span>
							<span className='space-x-1'>7</span>
							<span className='text-ignite-500 space-x-1'>X</span>
							<span className='space-x-1'>10</span>
							<span className='text-yellow-500 space-x-1'>Mongo B</span>
						</strong>
					</div>
				</div>
			</div>
		</>
	)
}