## Einführung

[![GitHub repo size](https://img.shields.io/github/repo-size/arounyf/Headscale-Admin-Pro)](https://github.com/arounyf/headscale-Admin)
[![Docker Image Size](https://img.shields.io/docker/image-size/runyf/hs-admin)](https://hub.docker.com/r/runyf/hs-admin)
[![docker pulls](https://img.shields.io/docker/pulls/runyf/hs-admin.svg?color=brightgreen)](https://hub.docker.com/r/runyf/hs-admin)
[![platfrom](https://img.shields.io/badge/platform-amd64%20%7C%20arm64-brightgreen)](https://hub.docker.com/r/runyf/hs-admin/tags)

Wichtige Upgrades:

1. Basierend auf meinem veröffentlichten headscale-Admin wurde das Backend mit Python refaktoriert.
2. Der Container enthält headscale integriert und ermöglicht ein schnelles Setup.
3. Der Container enthält integriertes Traffic-/Datenverkehrs-Monitoring – keine zusätzlichen Plugins erforderlich.
4. Entwicklung und Tests basieren auf der neuesten headscale-Version.

Offizielle QQ-Gruppe: 892467054

## Zeitlinie

* Juni 2024: Beginn der Beschäftigung mit headscale
* 8. September 2024: Veröffentlichung der ersten Version von headscale-Admin
* 26. März 2025: Veröffentlichung von Headscale-Admin-Pro (neue, in Python refaktorierte Version)

## Deployment mit Docker

```shell
mkdir ~/hs-admin
cd ~/hs-admin
wget https://raw.githubusercontent.com/arounyf/Headscale-Admin-Pro/refs/heads/main/docker-compose.yml
docker-compose up -d
```

1. Öffne `http://ip:5000`. Wenn du ein Admin-Konto registrierst, wird dieses automatisch zum System-Administrator.

2. Gehe in die Backend-Einstellungen, ändere z. B. `server url`, Netzwerkkartenname usw. Danach auf **Speichern** klicken und anschließend headscale neu starten.

3. DERP-Relay-Server konfigurieren (Pfad der headscale-Konfiguration: `~/hs-admin/config/config.yaml`)

4. Nginx konfigurieren (optional), Beispiel: `nginx-example.conf`

## Funktionen

* Benutzerverwaltung
* Separates Backend pro Benutzer
* Ablauf-/Gültigkeitsverwaltung für Benutzer
* Traffic-/Datenverkehrsstatistik
* Benutzerbasiertes ACL
* Knotenverwaltung
* Routenverwaltung
* Logverwaltung
* Verwaltung von Pre-Auth-Keys (Vorautorisierungsschlüssel)
* Rollenverwaltung
* Rechteverwaltung für API und Menü
* Integriertes headscale
* Integrierte Online-Bearbeitung der Konfiguration
* Knoten mit einem Klick hinzufügen (Reverse Proxy erforderlich)
* apiKey automatisch aktualisieren

## Versionszuordnung

Hinweis: `runyf` steht für eine nicht-offizielle headscale-Variante. Wegen DB-Anpassungen mussten Änderungen am headscale-Code vorgenommen werden.

| Headscale-Admin-Pro | headscale     |
| ------------------- | ------------- |
| v2.7                | v0.25.1       |
| v2.8                | v0.26.1       |
| v3.0                | v0.27.1-runyf |

## System-Screenshots

<img width="1280" alt="runyf_20250506230722" src="https://github.com/user-attachments/assets/d4c35e9e-d17a-46be-886d-50dd5a2425e9" />
<img width="1280" alt="runyf_20250506230832" src="https://github.com/user-attachments/assets/f30d6a9f-6042-46c0-825a-d4bffdb02b68" />
<img width="1280" alt="runyf_20250506230908" src="https://github.com/user-attachments/assets/78699c3d-6e54-4fcd-a6f4-889e77f17819" />
<img width="1280" alt="runyf_20250506231108" src="https://github.com/user-attachments/assets/41dde683-b95b-4fda-8396-a684f8de6f10" />
<img width="1280" alt="runyf_20250506230937" src="https://github.com/user-attachments/assets/bd234e91-a4fc-4299-b291-22235ba9bed9" />
<img width="1280" alt="runyf_20250506230957" src="https://github.com/user-attachments/assets/a1069cb4-e233-4220-aa54-6c0f2bab4e5e" />
