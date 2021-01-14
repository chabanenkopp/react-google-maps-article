import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mq, SPACE, COLOR, FONT_SIZE, MAX_CONTENT_WIDTH } from 'Theme'
import { AOS_ANIMATION, EMAIL } from 'constants/constants'
import { Flex, Box } from 'components/Layout'
import Line from 'components/Line'
import Logo from 'components/Logo'
import Facebook from 'images/svg/facebook.inline.svg'
import Instagram from 'images/svg/instagram.inline.svg'
import Linkedin from 'images/svg/linkedin.inline.svg'

const SOCIAL_LINK_PLACEHOLDER = 'https://sudolabs.io/'
const footerMQ = mq.to.M

const StyledFooter = styled('div')`
  display: flex;
  justify-content: space-between;
  max-width: ${MAX_CONTENT_WIDTH};
  font-size: ${FONT_SIZE.S};
  margin: 0 auto;
  padding: ${SPACE.M} 0;
  ${footerMQ`
    flex-direction: column;
    align-items: center;
    padding: ${SPACE.XL} 0 ${SPACE.M};
  `}
`

const MenuColumn = styled('div')`
  display: flex;
  flex-direction: column;
  ${footerMQ`
    align-items: center;
    padding-bottom: ${SPACE.XL};
  `}
`

const MenuItem = styled('p')`
  display: block;
  width: fit-content;
  padding-bottom: ${SPACE.S};
`

const StyledMenuItem = styled(MenuItem)`
  color: ${COLOR.WHITE};
  text-decoration: none;
`

const Social = styled(Flex)`
  > * {
    padding: ${SPACE.S};
  }
  ${mq.from.M`
    > :last-child {
      padding-right: 0;
    }
  `}
`

const SocialLink = styled('a')`
  display: inline-flex;
`

SocialLink.defaultProps = {
  target: '_blank',
  rel: 'noreferrer noopener',
}

const Footer = ({ hasBorder, ...props }) => (
  <Box {...props}>
    {hasBorder && <Line />}
    <StyledFooter {...AOS_ANIMATION.FADE_UP}>
      <MenuColumn>
        <Logo />
      </MenuColumn>
      <MenuColumn>
        <MenuItem>DUETT Business Residence</MenuItem>
        <MenuItem>Námestie osloboditeľov 3/A</MenuItem>
        <MenuItem>040 01 Košice, Slovakia</MenuItem>
      </MenuColumn>
      <MenuColumn>
        <StyledMenuItem as="a" href={`mailto:${EMAIL.SUDO_ACADEMY}`}>
          {EMAIL.SUDO_ACADEMY}
        </StyledMenuItem>
      </MenuColumn>
      <Social>
        <SocialLink href={SOCIAL_LINK_PLACEHOLDER}>
          <Facebook />
        </SocialLink>
        <SocialLink href={SOCIAL_LINK_PLACEHOLDER}>
          <Instagram />
        </SocialLink>
        <SocialLink href={SOCIAL_LINK_PLACEHOLDER}>
          <Linkedin />
        </SocialLink>
      </Social>
    </StyledFooter>
  </Box>
)

Footer.defaultProps = {
  hasBorder: true,
}

Footer.propTypes = {
  hasBorder: PropTypes.bool,
}

export default Footer
