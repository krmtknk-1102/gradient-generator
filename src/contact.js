import './styles/main.scss'
import { setupThemeToggle } from './ui/themeToggle.js'
import { setupStickyNav } from './ui/stickyNav.js'

const NOTIFY_URL = 'https://api.hibitsuiki.com/notify'
// ローカル環境用
// const NOTIFY_URL = 'http://localhost:3001/notify'


const form     = document.getElementById('contactForm')
const submit   = document.getElementById('submitBtn')
const status   = document.getElementById('formStatus')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const name    = document.getElementById('fieldName').value.trim()
  const email   = document.getElementById('fieldEmail').value.trim()
  const type    = document.getElementById('fieldType').value
  const message = document.getElementById('fieldMessage').value.trim()

  submit.disabled = true
  submit.textContent = '送信中...'
  status.className = 'form-status'

  try {
    const res = await fetch(NOTIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source:  'グラデーションサムネメーカー',
        name:    name    || '（未入力）',
        email:   email   || '（未入力）',
        type:    type    || '（未選択）',
        message,
      }),
    })

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    form.style.display = 'none'
    status.className = 'form-status is-success'
    status.textContent = 'ありがとうございます！　送信が完了しました。内容を確認次第、必要に応じてご連絡いたします。'
  } catch {
    status.className = 'form-status is-error'
    status.textContent = '送信に失敗しました。再度お試しください。'
    submit.disabled = false
    submit.textContent = '送信する'
  }
})

setupThemeToggle()
setupStickyNav()
