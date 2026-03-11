import fs from 'fs';
import axios from 'axios';
import * as cheerio from 'cheerio';

const ORBI_URL = "https://orbi.uliege.be/reports?action=1&field_1=author_authority&value_1_authority=&value_1=u223159&year_start=&year_end=&references=&model=none&format=apa&options=fwb.decree&abstract_length=&sort_1=issued_dt%3Adesc&sort_2=author_sort%3Aasc&sort_3=title_sort%3Aasc&output=html&lang_report=en";

async function fetchPubs() {
    try {
        const { data } = await axios.get(ORBI_URL);
        const $ = cheerio.load(data);
        const publications = [];

        $('.report-reference').each((i, el) => {
            const fullText = $(el).text().trim();
            const title = $(el).find('strong').text().trim();
            const doiLink = $(el).find('a[href*="doi.org"]').attr('href');
            
            // Extraction basique de l'année (ex: 2024)
            const yearMatch = fullText.match(/\((20\d{2})\)/);
            const year = yearMatch ? yearMatch[1] : "N/A";

            publications.push({
                id: i,
                title: title || "Titre non trouvé",
                fullReference: fullText,
                year: year,
                doi: doiLink || null
            });
        });

        fs.writeFileSync('./src/data/publications.json', JSON.stringify(publications, null, 2));
        console.log(`✅ ${publications.length} publications récupérées.`);
    } catch (error) {
        console.error("❌ Erreur Orbi:", error);
    }
}

fetchPubs();
