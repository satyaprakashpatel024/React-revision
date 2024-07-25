/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import { Button, Container } from '../components';
import { useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

export default function Post() {
	const [post, setPost] = useState(null);
	const { slug } = useParams();
	const navigate = useNavigate();
	let content = '';
	const userData = useSelector((state) => state.auth.userData);

	useEffect(() => {
		if (slug) {
			appwriteService.getPost(slug).then((post) => {
				if (post) setPost(post);
				else navigate('/');
			});
		} else navigate('/');
	}, [slug, navigate]);

	const isAuthor = post && userData ? post.userid === userData.$id : false;

	const deletePost = () => {
		appwriteService.deletePost(post.$id).then((status) => {
			if (status) {
				appwriteService.deleteFile(post.featuredImage);
				navigate('/');
			}
		});
	};

	return post ? (
		<div className='py-8'>
			<Container>
				<div className='flex justify-center mb-4 relative rounded-xl p-2'>
					<img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} width='200vw' height='200vh' className='rounded-xl' />

					{isAuthor && (
						<div className='absolute right-6 top-6'>
							<Link to={`/edit-post/${post.$id}`} className='border-black'>
								<Button bgColor='bg-green-500' className='mr-3'>
									Edit
								</Button>
							</Link>
							<Button bgColor='bg-red-500' className='border-black' onClick={deletePost}>
								Delete
							</Button>
						</div>
					)}
				</div>
				<div className='w-full mb-6'>
					<h1 className='text-2xl font-bold'>{post.title}</h1>
				</div>
				<div className='browser-css'>{parse(post.content)}</div>
			</Container>
		</div>
	) : null;
}
