import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	CopyRight,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<CopyRight>
							© All rights reserved to Sweettooth Bakery 2021
						</CopyRight>
						<SocialIcons>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Facebook'
								rel='noopener noreferrer'
								facebook>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Facebook'
								rel='noopener noreferrer'>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Facebook'
								rel='noopener noreferrer'>
								<FaTwitter />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
}

export default Footer;
