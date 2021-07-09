import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy(): JSX.Element {
  return (
    <div className="grid grid-rows-content h-screen">
      <Header page="Datenschutz" variant="min" />
      <main className="grid grid-cols-1 mr-2 ml-2 lg:gap-4 row-start-2 lg:grid-cols-4">
        <div className="col-start-1 col-end-4 self-start justify-self-center lg:col-start-2">
          <h2 className="text-2xl pb-4">Datenschutzerklärung</h2>
          <hr className="pb-4" />
          <section className="content">
            <h3 className="text-xl mt-4 mb-2">
              1. Datenschutz auf einen Blick
            </h3>
            <h4 className="text-lg mt-2 mb-1">Allgemeine Hinweise</h4>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <h4 className="text-lg mt-2 mb-1">
              Datenerfassung auf unserer Website
            </h4>
            <p>
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
            </p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong>
            </p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch beim Besuch der Website durch
              unsere IT-Systeme erfasst. Das sind vor allem technische Daten
              (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
              Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
              sobald Sie unsere Website betreten.
            </p>
            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong>
            </p>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
            </p>
            <p>
              Sie haben jederzeit das Recht unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung, Sperrung oder Löschung dieser Daten zu
              verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
              können Sie sich jederzeit unter der im Impressum angegebenen
              Adresse an uns wenden. Des Weiteren steht Ihnen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <h4 className="text-lg mt-2 mb-1">
              Analyse-Tools und Tools von Drittanbietern
            </h4>
            <p>
              Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit Cookies und mit
              sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens
              erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu
              Ihnen zurückverfolgt werden. Sie können dieser Analyse
              widersprechen oder sie durch die Nichtbenutzung bestimmter Tools
              verhindern. Detaillierte Informationen dazu finden Sie in der
              folgenden Datenschutzerklärung.
            </p>
            <p>
              Sie können dieser Analyse widersprechen. Über die
              Widerspruchsmöglichkeiten werden wir Sie in dieser
              Datenschutzerklärung informieren.
            </p>
            <h3 className="text-xl mt-4 mb-2">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h3>
            <h4 className="text-lg mt-2 mb-1">Datenschutz</h4>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>
            <h4 className="text-lg mt-2 mb-1">
              Hinweis zur verantwortlichen Stelle
            </h4>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <br />
            <p>
              Christian Rebelsky
              <br />
              Bahnhofstraße 9
              <br />
              68535 Edingen-Neckarhausen
            </p>

            <p>E-Mail: contact@christianrebelsky.de</p>
            <br />
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z.B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>
            <h4 className="text-lg mt-2 mb-1">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h4>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
              Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>
            <h4 className="text-lg mt-2 mb-1">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h4>
            <p>
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist
              der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser
              Unternehmen seinen Sitz hat. Eine Liste der
              Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem
              Link entnommen werden:
              <a
                href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
              </a>
              .
            </p>
            <h4 className="text-lg mt-2 mb-1">
              Recht auf Datenübertragbarkeit
            </h4>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>
            <h4 className="text-lg mt-2 mb-1">SSL- bzw. TLS-Verschlüsselung</h4>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              “http://” auf “https://” wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>
            <p>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>
            <h4 className="text-lg mt-2 mb-1">Auskunft, Sperrung, Löschung</h4>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema personenbezogene Daten können
              Sie sich jederzeit unter der im Impressum angegebenen Adresse an
              uns wenden.
            </p>
            <h3 className="text-xl mt-4 mb-2">
              3. Datenerfassung auf unserer Website
            </h3>
            <h4 className="text-lg mt-2 mb-1">Server-Log-Dateien</h4>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>
            <p>
              Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f
              DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags
              oder vorvertraglicher Maßnahmen gestattet.
            </p>
            <h3 className="text-xl mt-4 mb-2">4. Analyse Tools und Werbung</h3>
            <h4 className="text-lg mt-2 mb-1">Google Analytics</h4>
            <p>
              Diese Website nutzt Funktionen des Webanalysedienstes Google
              Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA.
            </p>
            <p>
              Google Analytics verwendet so genannte &ldquo;Cookies&rdquo;. Das
              sind Textdateien, die auf Ihrem Computer gespeichert werden und
              die eine Analyse der Benutzung der Website durch Sie ermöglichen.
              Die durch den Cookie erzeugten Informationen über Ihre Benutzung
              dieser Website werden in der Regel an einen Server von Google in
              den USA übertragen und dort gespeichert.
            </p>
            <p>
              Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage
              von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der Analyse des Nutzerverhaltens, um
              sowohl sein Webangebot als auch seine Werbung zu optimieren.
            </p>
            <p>
              <strong>IP Anonymisierung</strong>
            </p>
            <p>
              Wir haben auf dieser Website die Funktion IP-Anonymisierung
              aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von
              Mitgliedstaaten der Europäischen Union oder in anderen
              Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in
              Ausnahmefällen wird die volle IP-Adresse an einen Server von
              Google in den USA übertragen und dort gekürzt. Im Auftrag des
              Betreibers dieser Website wird Google diese Informationen
              benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über
              die Websiteaktivitäten zusammenzustellen und um weitere mit der
              Websitenutzung und der Internetnutzung verbundene Dienstleistungen
              gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von
              Google Analytics von Ihrem Browser übermittelte IP-Adresse wird
              nicht mit anderen Daten von Google zusammengeführt.
            </p>
            <p>
              <strong>Browser Plugin</strong>
            </p>
            <p>
              Sie können die Speicherung der Cookies durch eine entsprechende
              Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website vollumfänglich werden nutzen
              können. Sie können darüber hinaus die Erfassung der durch den
              Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten
              (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser
              Daten durch Google verhindern, indem Sie das unter dem folgenden
              Link verfügbare Browser-Plugin herunterladen und installieren:
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>
              .
            </p>
            <p>
              <strong>Widerspruch gegen Datenerfassung</strong>
            </p>
            <p>
              Sie können die Erfassung Ihrer Daten durch Google Analytics
              verhindern, indem Sie auf folgenden Link klicken. Es wird ein
              Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei
              zukünftigen Besuchen dieser Website verhindert:
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,no-script-url */}
              <a href="javascript:gaOptout();">Google Analytics deaktivieren</a>
              .
            </p>
            <p>
              Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
              finden Sie in der Datenschutzerklärung von Google:
              <a
                href="https://support.google.com/analytics/answer/6004245?hl=de"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://support.google.com/analytics/answer/6004245?hl=de
              </a>
              .
            </p>
            <h3 className="text-xl mt-4 mb-2">5. Plugins und Tools</h3>
            <h4 className="text-lg mt-2 mb-1">Google Web Fonts</h4>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              so genannte Web Fonts, die von Google bereitgestellt werden. Beim
              Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in
              ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            </p>
            <p>
              Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung
              zu den Servern von Google aufnehmen. Hierdurch erlangt Google
              Kenntnis darüber, dass über Ihre IP-Adresse unsere Website
              aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im
              Interesse einer einheitlichen und ansprechenden Darstellung
              unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im
              Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
            <p>
              Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine
              Standardschrift von Ihrem Computer genutzt.
            </p>
            <p>
              Weitere Informationen zu Google Web Fonts finden Sie unter
              <a
                href="https://developers.google.com/fonts/faq"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://developers.google.com/fonts/faq
              </a>
              und in der Datenschutzerklärung von Google:
              <a
                href="https://www.google.com/policies/privacy/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.google.com/policies/privacy/
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer active="datenschutz" />
    </div>
  )
}
