import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import { Global } from '@emotion/react'

interface IPropsGridItem {
  href: string
  title: string
  thumbnail: StaticImageData
}

export const GridItem: FC<IPropsGridItem> = ({
  href,
  title,
  children,
  thumbnail
}) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

interface IPropsWorkGridItem {
  id: string
  title: string
  thumbnail: StaticImageData
}

export const WorkGridItem: FC<IPropsWorkGridItem> = ({
  id,
  title,
  children,
  thumbnail
}) => (
  <Box w="100%" align="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
    `}
  />
)
