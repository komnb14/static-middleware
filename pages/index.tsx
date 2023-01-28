import Link from 'next/link'
import { useRouter } from 'next/router'
import LocaleSwitcher from '../components/locale-switcher'

export default function IndexPage() {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <div>
        THIS PAGE IS NOT USABLE
    </div>
  )
}
