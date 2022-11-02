// 方便測試js有沒有抓到東西
import axios from 'axios'
import * as cheerio from 'cheerio'

const main = async () => {
  try {
    const { data } = await axios.get('https://wdaweb.github.io/')
    const $ = cheerio.load(data)
    const courses = []
    $('#general .card-title').each(function () {
      courses.push($(this).text().trim())
    })
    console.log(courses)
  } catch (error) {}
}

main()
