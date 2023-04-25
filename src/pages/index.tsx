import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import logo from '../assets/futebol.png';
import usersAvatarExampleImg from '../assets/users-avatar-example.png';
import alexsandro from '../assets/alexsandro.jpg';
import iconCheckImg from '../assets/icon-check.svg';
import { number } from 'prop-types';

interface IHome {
	scorers: {
		player: string;
		scorer: number;
		image?: string;
	}[];
	playerMatch: {
		player: string;
		scorer: number;
	}[];
	games: {
		timeA: string;
		timeAScorer: number;
		timeB: string;
		timeBScorer: number;
		weFriendly: 'we' | 'friendly';
		totalScorer: number;
		results?: "victorie" | 'defeats' | 'draw' | "victorieDefeats";
	}[]
}

export default function Home({ scorers, playerMatch, games }: IHome) {
	return (
		<>
			<div className='max-w-[1124px] h-screen mx-auto grid sm:grid-cols-1 md:grid-cols-3 items-center gap-28'>
				<main className='mt-14 ml-5 text-white text-5xl font-bold leading-tight'>
					<Image
						src={logo}
						alt="NLW Copa"
					/>


					<h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Top scorers!</h1>

					<div className='mt-10 flex items-left gap-2 flex-col overflow-y-auto h-96 scrollbar-thin scrollbar-thumb-ignite-500 scrollbar-track-yellow-500'>
						{scorers.map((item: any, index: number) => (
							index > 2 ? (
								<strong className='text-gray-100 text-sm flex items-center space-x-1'>
									<span className='text-yellow-500 space-x-1'>{index + 1}º</span>
									<Image
										src={item.image}
										alt={item.player}
										className='rounded-full space-x-1'
										width={30}
										height={30}
									/>
									<span className='text-yellow-500 space-x-1'>{item.player}</span>
									<span className='text-gray-100 space-x-1'>{item.scorer} votos</span>
								</strong>
							) : (
								<strong className='text-gray-100 text-xl flex items-center space-x-1'>
									<span className='text-ignite-500 space-x-1'>{index + 1}º</span>
									<Image
										src={item.image}
										alt={item.player}
										className='rounded-full space-x-1'
										width={50}
										height={50}
									/>
									<span className='text-ignite-500 space-x-1'>{item.player}</span>
									<span className='text-gray-100 space-x-1'>{item.scorer} gols</span>

								</strong>
							)
						))}
					</div>

				</main >

				<div className='mt-14 ml-5 text-white text-5xl font-bold leading-tight'>
					<h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Players of the match!</h1>

					<div className='mt-10 flex items-left gap-2 flex-col overflow-y-auto h-96 scrollbar-thin scrollbar-thumb-ignite-500 scrollbar-track-yellow-500'>
						{playerMatch.map((item: any, index: number) => (
							index > 2 ? (
								<strong className='text-gray-100 text-sm flex items-center space-x-1'>
									<span className='text-yellow-500 space-x-1'>{index + 1}º</span>
									<Image
										src={item.image}
										alt={item.player}
										className='rounded-full space-x-1'
										width={30}
										height={30}
									/>
									<span className='text-yellow-500 space-x-1'>{item.player}</span>
									<span className='text-gray-100 space-x-1'>{item.scorer} votos</span>
								</strong>
							) : (
								<strong className='text-gray-100 text-xl flex items-center space-x-1'>
									<span className='text-ignite-500 space-x-1'>{index + 1}º</span>
									<Image
										src=""
										alt=""
										className='rounded-full space-x-1'
										width={50}
										height={50}
									/>
									<span className='text-ignite-500 space-x-1'>{item.player}</span>
									<span className='text-gray-100 space-x-1'>{item.scorer} votos</span>

								</strong>
							)
						))}
					</div>
				</div>

				<div className='mt-14 ml-5 text-white text-5xl font-bold leading-tight'>
					<h1 className='text-white text-5xl font-bold leading-tight'>Games!</h1>

					<div className='flex items-center gap-2 space-x-1'>
						<div className=' flex items-left gap-2 flex-col'>
							<h5 className=' text-ignite-500 text-xl font-bold leading-tight'>Mongos x Mongos</h5>
							<strong className='text-gray-100 text-sm flex items-center space-x-1'>{games.filter(item => item.weFriendly === 'we').length} Jogos</strong>
							<strong className='text-gray-100 text-sm flex items-center space-x-1'>{games.filter(item => item.results === 'victorieDefeats' && item.weFriendly === 'we').length} Vitórias</strong>
							<strong className='text-gray-100 text-sm flex items-center space-x-1'>{games.filter(item => item.results === 'draw' && item.weFriendly === 'we').length} Empate</strong>
							<strong className='text-gray-100 text-sm flex items-center space-x-1'>{games.filter(item => item.results === 'victorieDefeats' && item.weFriendly === 'we').length} Derrotas</strong>
							<strong className='text-gray-100 text-sm flex items-center space-x-1'>
								{
									games.filter(item => item.weFriendly === 'we').reduce((acumulador, valorAtual) => { return acumulador + valorAtual.totalScorer }, 0)
								}
								{" "} Gols marcado
							</strong>
						</div>
						<div className='flex items-left gap-2 flex-col'>
							<h5 className=' text-ignite-500 text-xl font-bold leading-tight'>Friendly match</h5>
							<strong className='text-gray-100 text-sm flex items-center space-x-1'>{games.filter(item => item.weFriendly === 'friendly').length} Jogos</strong>
							<strong className='text-gray-100 text-sm flex items-center space-x-1'>{games.filter(item => item.results === 'victorie' && item.weFriendly === 'friendly').length} Vitórias</strong>
							<strong className='text-gray-100 text-sm flex items-center space-x-1'>{games.filter(item => item.results === 'draw' && item.weFriendly === 'friendly').length} Empate</strong>
							<strong className='text-gray-100 text-sm flex items-center space-x-1'>{games.filter(item => item.results === 'defeats' && item.weFriendly === 'friendly').length} Derrotas</strong>
							<strong className='text-gray-100 text-sm flex items-center space-x-1'>
								{
									games.filter(item => item.weFriendly === 'friendly').reduce((acumulador, valorAtual) => { return acumulador + valorAtual.totalScorer }, 0)
								}
								{" "} Gols marcado
							</strong>						</div>
					</div>

					<div className='mt-10 flex items-center gap-2 flex-col'>
						{games.map((item: any) => (
							<strong className='text-gray-100 text-xl flex items-center space-x-1'>
								<span className='text-yellow-500 space-x-1'>{item.timeA}</span>
								<span className='space-x-1'>{item.timeAScorer}</span>
								<span className='text-ignite-500 space-x-1'>X</span>
								<span className='space-x-1'>{item.timeBScorer}</span>
								<span className='text-yellow-500 space-x-1'>{item.timeB}</span>
							</strong>
						))}
					</div>
				</div>
			</div >
		</>
	)
}

export const getServerSideProps = async () => {
	const scorers = [
		{
			player: 'Xandy',
			scorer: 26
		},
		{
			player: 'Leandro ',
			scorer: 25
		},
		{
			player: 'Alexsandro',
			scorer: 24,
			image: "https://github.com/AlexsandroProjetosOficial.png"
		},
		{
			player: 'Thiago',
			scorer: 24
		},
		{
			player: 'Fernando ',
			scorer: 21
		},
		{
			player: 'Maico',
			scorer: 15
		},
		{
			player: 'Fio',
			scorer: 15
		},
		{
			player: 'Douglas',
			scorer: 12
		},
		{
			player: 'Cleiton',
			scorer: 11
		},
		{
			player: 'Marquinhos',
			scorer: 9
		},
		{
			player: 'Matheus',
			scorer: 7
		},
		{
			player: 'Jimmy',
			scorer: 6
		},
		{
			player: 'Emerson',
			scorer: 5
		},
		{
			player: 'Waguinho',
			scorer: 4
		},
		{
			player: 'Henrique',
			scorer: 3
		},
		{
			player: 'Wand',
			scorer: 2
		},
		{
			player: 'Luiz',
			scorer: 2
		},
		{
			player: 'Valter',
			scorer: 1
		}
	].sort(function (a, b) {
		if (a.player > b.player) {
			return 1;
		}
		if (a.player < b.player) {
			return -1;
		}
		return 0;
	}).sort(function (a, b) {
		return b.scorer - a.scorer;
	});

	const playerMatch = [
		{
			player: 'Moacir',
			scorer: 28
		},
		{
			player: 'Wand ',
			scorer: 15
		},
		{
			player: 'Guilerme',
			scorer: 14
		},
		{
			player: 'Fio',
			scorer: 11
		},
		{
			player: 'Jimmy',
			scorer: 10
		},
		{
			player: 'Thiago',
			scorer: 9
		},
		{
			player: 'Leandro',
			scorer: 7
		},
		{
			player: 'Fernando',
			scorer: 7
		},
		{
			player: 'Cleiton',
			scorer: 7
		},
		{
			player: 'Marquinhos',
			scorer: 6
		},
		{
			player: 'Betão',
			scorer: 6
		},
		{
			player: 'Douglas',
			scorer: 6
		},
		{
			player: 'Maico',
			scorer: 4
		},
		{
			player: 'Henrique',
			scorer: 3
		},
		{
			player: 'Alexsandro',
			scorer: 3,
			image: "https://github.com/AlexsandroProjetosOficial.png"
		},
		{
			player: 'Lekão',
			scorer: 2
		},
		{
			player: 'Valter',
			scorer: 1
		},
		{
			player: 'Luiz',
			scorer: 1
		},
	].sort(function (a, b) {
		if (a.player > b.player) {
			return 1;
		}
		if (a.player < b.player) {
			return -1;
		}
		return 0;
	}).sort(function (a, b) {
		return b.scorer - a.scorer;
	});

	const games = [
		{
			timeA: "Mongos A",
			timeAScorer: 12,
			timeB: "Mongos B",
			timeBScorer: 7,
			weFriendly: 'we',
			totalScorer: 19,
			results: 'victorieDefeats'
		},
		{
			timeA: "Mongos",
			timeAScorer: 10,
			timeB: "Amigos do Cris",
			timeBScorer: 2,
			weFriendly: 'friendly',
			totalScorer: 10,
			results: 'victorie'
		}
	]

	return {
		props: {
			scorers: scorers,
			playerMatch: playerMatch,
			games: games
		}
	}
}