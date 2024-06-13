import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FiMoon, FiSun } from 'react-icons/fi'

const LanguageToggle = ({ router }: { router: any }) => {
  const switchToEnglish = () => {
    router.push(router.pathname, router.asPath, { locale: 'en' })
  }
console.log(router.locale)
  const switchToVietnamese = () => {
    router.push(router.pathname, router.asPath, { locale: 'vi' })
  }
  return (
    <Button
      variant="ghost"
      aria-label="theme toggle"
      // icon={colorMode === 'light' ? <FiMoon size="14" /> : <FiSun size="14" />}
      borderRadius="md"
      onClick={router.locale === 'en' ? switchToVietnamese : switchToEnglish}
    >
      {router.locale === 'en' ? 'EN' : 'VN'}
    </Button>
  )
}

export default LanguageToggle
