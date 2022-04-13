"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[2174],{9592:function(e){e.exports=JSON.parse('{"type":"object","content":{"openapi":"3.0.0","servers":[{"url":"//192.168.2.1/","description":"SPR API server"}],"info":{"description":"# Introduction\\nThe API service exists for communication between service containers and to support\\nexternal requests from the web front end or CLI tools.\\n\\nThe internal APIs run over unix sockets and rely on filesystem namespaces for authentication.\\nCurrently there are two internal APIs:\\n- Support for the [wifid service accepting stations](#tag/unix_wifid)\\n- Support for dynamic networking configuration with [DHCP](#tag/unix_dhcpd)\\n\\nThe external API runs over port :80\\n\\n[ \u21e8 View the code](https://github.com/spr-networks/super/tree/main/api)\\n\\n# Authentication\\n\\n### Configuration\\nOn the device, the following files contain credentials for access.\\n- `state/api/auth_users` is a JSON file with a dictionary for username, password pairs\\n- `state/api/auth_tokens` is a JSON file with a list of authentication tokens\\n\\n<SecurityDefinitions />\\n\\n# API Extensions\\nAPI extensions operate through a reverse proxy into a unix socket. They allow for hosting\\nextensions to the API on the same web origin while running in a different process or container.\\n\\nExtensions are configured in ```state/api/config```\\n\\nExample showing the mapping of unix://state/dns/dns_block_plugin to  http://APIHOST/plugins/dns/block/\\n\\n```json\\n{\\n  \\"Plugins\\" : [{\\n    \\"Name\\": \\"dns block extension\\",\\n    \\"URI\\": \\"dns/block\\",\\n    \\"UnixPath\\": \\"/state/dns/dns_block_plugin\\"\\n  }]\\n}\\n```\\n","version":"0.0.1","title":"Secure Programmable Router API","contact":{"name":"SPR contact","url":"https://matrix.to/#/#spr:matrix.org"},"x-logo":{"url":"https://www.supernetworks.org/pages/img/logo.png","altText":"SPR logo"}},"tags":[{"name":"device","x-displayName":"Devices","description":"Manage Device Wifi Authentication and Network Access"},{"name":"zone","x-displayName":"Zones","description":"Zones are used to manage device connectivity and firewall rules"},{"name":"psk","x-displayName":"PSK","description":"Manage Device Passphrases"},{"name":"traffic","x-displayName":"Network Traffic","description":"Device traffic information"},{"name":"network","x-displayName":"Network Information","description":"Operations about Network, NFTable, IP Address information"},{"name":"hostapd","x-displayName":"Hostapd","description":"Operations about hostapd"},{"name":"dnsblock","x-displayName":"DNS Block","description":"CoreDNS Block plugin"},{"name":"dnslog","x-displayName":"DNS Log","description":"CoreDNS Log plugin"},{"name":"psk_model","x-displayName":"PSK","description":"<SchemaDefinition schemaRef=\\"#/components/schemas/PSKEntry\\" exampleRef=\\"#/components/examples/PSKEntry\\" />\\n"},{"name":"device_model","x-displayName":"Device","description":"<SchemaDefinition schemaRef=\\"#/components/schemas/DeviceEntry\\" exampleRef=\\"#/components/examples/DeviceEntry\\" />\\n"},{"name":"zone_model","x-displayName":"Zone","description":"<SchemaDefinition schemaRef=\\"#/components/schemas/ZoneEntry\\" exampleRef=\\"#/components/examples/ZoneEntry\\" />\\n"},{"name":"unix_wifid","x-displayName":"Wifid","description":"Listens for requests on ```unix:///state/wifi/apisock```"},{"name":"unix_dhcpd","x-displayName":"dhcpd","description":"Listens for requests on ```unix:///state/dhcp/apisock```"},{"name":"general","x-displayName":"Misc","description":"Misc information"}],"x-tagGroups":[{"name":"Web API","tags":["device","zone","network","traffic","psk","hostapd","general"]},{"name":"API Extensions","tags":["dnsblock","dnslog","wireguard","wifid"]},{"name":"Internal Unix Socket APIs","tags":["unix_wifid","unix_dhcpd"]},{"name":"Object Types","tags":["device_model","zone_model","psk_model"]}],"paths":{"/devices":{"get":{"tags":["device"],"summary":"Get Devices","description":"Returns a map of registered devices, indexed by MAC address","operationId":"getDevices","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"$ref":"#/components/schemas/DeviceEntryMap"}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/devices\\"\\n"}]}},"/device/{identity}":{"put":{"tags":["device"],"summary":"Update Device","description":"Update information specified by the MAC address in the identity parameter. All fields are optional. If a PSKEntry.PskType is set and a PSKEntry.Psk is not set, one will be generated and returned. To create a wildcard PSK for adding a new device, use the string \\"pending\\" for the identity.","operationId":"handleUpdateDevice","requestBody":{"$ref":"#/components/requestBodies/DeviceEntry"},"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"$ref":"#/components/schemas/DeviceEntry"}}}},"404":{"description":"Device not found"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X PUT \\\\\\n  \\"http://192.168.2.1/device/11:22:33:44:55:66\\" < device.json\\n"}]},"delete":{"tags":["device"],"summary":"Delete Device","description":"Delete a Device specified by the MAC address in the identity parameter","operationId":"deleteDevice","responses":{"200":{"description":"successful operation"},"404":{"description":"Device not found"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X DELETE \\\\\\n  \\"http://192.168.2.1/device/11:22:33:44:55:66\\"\\n"}]}},"/zones":{"get":{"tags":["zone"],"summary":"Get all Zones","description":"Return all available zones","operationId":"getZones","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ZoneEntryArray"}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/zones\\"\\n"}]},"put":{"tags":["zone"],"summary":"Add a Zone entry","description":"If the zone does not exist, it will be created.\\nIf it exists it will be updated. Fields are optional.\\n","operationId":"updateZones","requestBody":{"$ref":"#/components/requestBodies/ZoneEntry"},"responses":{"200":{"description":"successful operation"},"400":{"description":"Invalid input"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X PUT  \\\\\\n  \\"http://192.168.2.1/zone\\" \\\\\\n     --data \'{\\"Name\\": \\"vpn\\", \\"Disabled\\": false, \\"ZoneTags\\": [\\"private\\"]}\'\\n"}]},"delete":{"tags":["zone"],"summary":"Remove a Zone","description":"","operationId":"deleteZone","responses":{"200":{"description":"successful operation"},"404":{"description":"Invalid Zone supplied"}},"requestBody":{"$ref":"#/components/requestBodies/ZoneEntry"},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X DELETE  \\\\\\n  \\"http://192.168.2.1/zones\\" \\\\\\n    --data \'{\\"Name\\": \\"vpn\\"}\'\\n"}]}},"/reloadPSKFiles":{"put":{"tags":["psk"],"summary":"Reload PSK files","description":"Tells Hostapd to reload PSK files. This will not boot off connected devices. This does not need to be called after adding or removing PSK entries.","operationId":"reloadPSKFiles","responses":{"200":{"description":"successful operation"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X PUT  \\\\\\n  \\"http://192.168.2.1/reloadPSKFiles\\"\\n"}]}},"/pendingPSK":{"get":{"tags":["psk"],"summary":"Pending PSKs","description":"Checks if there is a pending PSK that has not been assigned to a MAC yet","operationId":"pendingPSK","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"boolean"}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/pendingPSK\\"\\n"}]}},"/ip/addr":{"get":{"tags":["network"],"summary":"Get IP address information","description":"Returns the outut of `ip -j addr`","operationId":"ipAddr","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Interface"}}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/ip/addr\\"\\n"}]}},"/nfmap/{name}":{"get":{"tags":["network"],"summary":"Retrieve NFTable Verdict Map","description":"Returns the output of nft -j for the verdict map specificed by the name parameter","operationId":"showNFMap","parameters":[{"name":"name","in":"path","description":"Name of the nfmap to fetch","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object"}}}},"400":{"description":"Invalid Map name supplied"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/nfmap/dns_access\\"\\n"}]}},"/arp":{"get":{"tags":["network"],"summary":"Retrieve the ARP table","description":"Returns the ARP table","operationId":"showARP","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ArpEntry"}}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/arp\\"\\n"}]}},"/iptraffic":{"get":{"tags":["traffic"],"summary":"Retrieve IP traffic","description":"Returns IP traffic information","operationId":"getIPTraffic","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/IPTrafficElement"}}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/iptraffic\\"\\n"}]}},"/traffic/{countermap}":{"get":{"tags":["traffic"],"summary":"Retrieve traffic for lan/wan","description":"Returns traffic information from the counter specified by the name parameter. Countermap can be one of `incoming_traffic_lan` | `outgoing_traffic_lan` | `outgoing_traffic_wan` | `incoming_traffic_wan`. See the [accounting.sh](https://github.com/spr-networks/super/blob/main/base/scripts/accounting.sh) NFT rules for additional information","operationId":"getDeviceTraffic","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/TrafficElement"}}}}},"400":{"description":"Failed to collect traffic statistics for device"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/traffic/outgoing_traffic_lan\\"\\n"}]}},"/traffic_history":{"get":{"tags":["traffic"],"summary":"Retrieve historical traffic data for devices","description":"Returns traffic information for all devices","operationId":"getTrafficHistory","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TrafficHistory"}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/traffic_history\\"\\n"}]}},"/hostapd/status":{"get":{"tags":["hostapd"],"summary":"Retrieve hostapd status","description":"Returns current status for hostapd","operationId":"hostapdStatus","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","$ref":"#/components/schemas/HostapdStatus"}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/hostapd/status\\"\\n"}]}},"/hostapd/all_stations":{"get":{"tags":["hostapd"],"summary":"Retrieve all_stations output","description":"Returns current status for all stations","operationId":"hostapdAllStations","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","additionalProperties":{"x-additionalPropertiesName":"11:22:33:44:55:6","$ref":"#/components/schemas/StationInfo"}}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/hostapd/all_stations\\"\\n"}]}},"/hostapd/config":{"get":{"tags":["hostapd"],"summary":"Retrieve hostapd config","description":"Returns hostapd configuration","operationId":"hostapdConfiguration","responses":{"200":{"description":"successful operation","content":{"text/plain":{"schema":{"type":"string"}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/hostapd/config\\"\\n"}]}},"/reportPSKAuthFailure":{"put":{"tags":["unix_wifid"],"summary":"Report PSK auth failure","description":"","operationId":"reportPSKAuthFailure","responses":{"200":{"description":"successful operation"},"400":{"description":"malformed data"}},"requestBody":{"$ref":"#/components/requestBodies/PSKAuthFailure"},"security":[{"basicAuth":[]},{"bearerAuth":[]}]}},"/reportPSKAuthSuccess":{"put":{"tags":["unix_wifid"],"summary":"Report PSK auth success","description":"","operationId":"reportPSKAuthSuccess","responses":{"200":{"description":"successful operation"},"400":{"description":"malformed data"}},"requestBody":{"$ref":"#/components/requestBodies/PSKAuthSuccess"},"security":[{"basicAuth":[]},{"bearerAuth":[]}]}},"/dhcpUpdate":{"put":{"tags":["unix_dhcpd"],"summary":"Update DHCP information","description":"Handle networking tasks upon a DHCP","operationId":"dhcpUpdate","responses":{"200":{"description":"successful operation"}},"requestBody":{"$ref":"#/components/requestBodies/DHCPUpdate"},"security":[{"basicAuth":[]},{"bearerAuth":[]}]}},"/plugins/dns/block/config":{"get":{"tags":["dnsblock"],"summary":"Retrieve coredns-block config","description":"Returns coredns-block config","operationId":"showConfig","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"string","example":"config"}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/plugins/dns/block/config\\"\\n"}]}},"/plugins/dns/block/override":{"put":{"tags":["dnsblock"],"summary":"Add override domain","description":"Add domain to be blocked/permitted by DNS","operationId":"addBlockDomains","requestBody":{"$ref":"#/components/requestBodies/DNSDomainOverride"},"responses":{"200":{"description":"successful operation"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X PUT  \\\\\\n  \\"http://192.168.2.1/plugins/dns/block/override\\" \\\\\\n  --data \'{\\"Type\\": \\"Permit\\", \\"Domain\\": \\"example.com.\\", \\"ResultIP\\": \\"1.1.1.1\\", \\"ClientIP\\": \\"*\\", \\"Expiration\\": 0}\'\\n"}]},"delete":{"tags":["dnsblock"],"summary":"Delete override domain","description":"Delete domain to be blocked/permitted by DNS","operationId":"deleteBlockDomains","requestBody":{"$ref":"#/components/requestBodies/DNSDomainOverride"},"responses":{"200":{"description":"successful operation"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X DELETE  \\\\\\n  \\"http://192.168.2.1/plugins/dns/block/override\\" \\\\\\n  --data \'{\\"Domain\\": \\"example.com.\\", \\"Type\\": \\"Permit\\"}\'\\n"}]}},"/plugins/dns/block/blocklist":{"get":{"tags":["dnsblock"],"summary":"Retrieve blocklists","description":"Returns blocklist URIs","operationId":"showDNSBlocklist","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/DNSListEntry"}}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/plugins/dns/block/blocklist\\"\\n"}]},"put":{"tags":["dnsblock"],"summary":"Add blocklist","description":"Add blocklist entry","operationId":"addDNSBlocklist","requestBody":{"$ref":"#/components/requestBodies/DNSListEntry"},"responses":{"200":{"description":"successful operation"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X PUT  \\\\\\n  \\"http://192.168.2.1/plugins/dns/block/blocklist\\" \\\\\\n  --data \'{\\"URI\\": \\"http://asdf.com\\", \\"Enabled\\": true}\'\\n"}]},"delete":{"tags":["dnsblock"],"summary":"Delete blocklist entry","description":"Delete a blocklist entry","operationId":"deleteDNSBlocklist","requestBody":{"$ref":"#/components/requestBodies/DNSListEntry"},"responses":{"200":{"description":"successful operation"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X DELETE  \\\\\\n  \\"http://192.168.2.1/plugins/dns/block/blocklist\\" \\\\\\n  --data \'{\\"URI\\": \\"http://asdf.com\\"}\'\\n"}]}},"/plugins/dns/block/exclusions":{"get":{"tags":["dnsblock"],"summary":"Retrieve IPs excluded from blocking","description":"Returns IPs excluded from DNS block","operationId":"showDNSExclusions","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"},"example":["192.168.2.102","192.168.2.112"]}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/plugins/dns/block/exclusions\\"\\n"}]},"put":{"tags":["dnsblock"],"summary":"Add IP to exclude","description":"Add IP address to exclusion list","operationId":"addDNSExclusion","requestBody":{"type":"string","example":"192.168.2.102"},"responses":{"200":{"description":"successful operation"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X PUT  \\\\\\n  \\"http://192.168.2.1/plugins/dns/block/exclusions\\" \\\\\\n  --data \'\\"192.168.2.102\\"\'\\n"}]},"delete":{"tags":["dnsblock"],"summary":"Delete IP from exclusion list","description":"Delete IP address from exclusion list","operationId":"deleteDNSExclusion","requestBody":{"type":"string","example":"192.168.2.102"},"responses":{"200":{"description":"successful operation"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X DELETE  \\\\\\n  \\"http://192.168.2.1/plugins/dns/block/exclusions\\" \\\\\\n  --data \'\\"192.168.2.102\\"\'\\n"}]}},"/plugins/dns/block/dump_domains":{"get":{"tags":["dnsblock"],"summary":"Dump all domains loaded from block lists","description":"Returns aggregate list of all block domains","operationId":"dumpDNSEntries","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"},"example":["asdf.com","example.com"]}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\"http://192.168.2.1/plugins/dns/block/dump_domains\\"\\n"}]}},"/plugins/dns/block/metrics":{"get":{"tags":["dnsblock"],"summary":"Get metrics","description":"Returns metrics for DNS block","operationId":"getDNSMetrics","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"object","$ref":"#/components/schemas/DNSBlockMetrics"}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/plugins/dns/block/metrics\\"\\n"}]}},"/plugins/dns/log/config":{"get":{"tags":["dnslog"],"summary":"Retrieve coredns-jsonlog configuration","operationId":"showDnsLogConfig","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"example":[{"HostPrivacyIPList":["192.168.1.10"]},{"DomainIgnoreList":["asdf.com","asdf2.com","test.com."]}]}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/plugins/dns/log/config\\"\\n"}]}},"/plugins/dns/log/host_privacy_list":{"get":{"tags":["dnslog"],"summary":"Retrieve list of privacy hosts","description":"List of hosts to exclude from DNS Log","operationId":"showHostPrivacyList","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"example":["192.168.1.10"]}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/plugins/dns/log/host_privacy_list\\"\\n"}]},"put":{"tags":["dnslog"],"summary":"Set the list of privacy hosts","operationId":"setHostPrivacyList","requestBody":{"type":"array","items":{"type":"string"}},"responses":{"200":{"description":"successful operation"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X PUT  \\\\\\n  \\"http://192.168.2.1/plugins/dns/log/host_privacy_list\\" \\\\\\n  --data \'[\\"192.168.1.10\\", \\"192.168.1.14\\"]\'\\n"}]}},"/plugins/dns/log/domain_ignores":{"get":{"tags":["dnslog"],"summary":"Retrieve list of domains to exclude from logging","operationId":"getDomainIgnores","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"string","example":["localhost"]}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/plugins/dns/log/domain_ignores\\"\\n"}]}},"/plugins/dns/log/domain_ignore/{domain}":{"put":{"tags":["dnslog"],"summary":"Add domain to exclude from logs","operationId":"addDomainIgnore","responses":{"200":{"description":"successful operation"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X PUT  \\\\\\n  \\"http://192.168.2.1/plugins/dns/log/domain_ignore/example.com\\"\\n"}]}},"/plugins/dns/log/history/{ip}":{"get":{"tags":["dnslog"],"summary":"Retrieve recent DNS history for a given IP","operationId":"getDNSHistory","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"string","example":[{"Q":[{"Name":"supernetworks.org.","Qtype":1,"Qclass":1}],"A":[{"Hdr":{"Name":"supernetworks.org.","Rrtype":1,"Class":1,"Ttl":30,"Rdlength":4},"A":"172.67.71.52"},{"Hdr":{"Name":"supernetworks.org.","Rrtype":1,"Class":1,"Ttl":30,"Rdlength":4},"A":"104.26.7.38"},{"Hdr":{"Name":"supernetworks.org.","Rrtype":1,"Class":1,"Ttl":30,"Rdlength":4},"A":"104.26.6.38"}],"Type":"NOERROR","FirstName":"supernetworks.org.","FirstAnswer":"172.67.71.52","Local":"[::]:53","Remote":"127.0.0.1:60237","Timestamp":"2022-03-28T21:47:49.563958-07:00"}]}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/plugins/dns/log/history/192.168.1.10\\"\\n"}]},"delete":{"tags":["dnslog"],"summary":"Delete Device History by IP","description":"Delete device history in the IP parameter","operationId":"deleteDNSHistory","responses":{"200":{"description":"successful operation"}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" -X DELETE \\\\\\n  \\"http://192.168.2.1/plugins/dns/log/history/192.168.1.10\\"\\n"}]}},"/status":{"get":{"tags":["general"],"summary":"Get Status","description":"Returns \\"Online\\". Can be used to test authentication","operationId":"getStatus","responses":{"200":{"description":"successful operation","content":{"application/json":{"schema":{"type":"string","example":"Online"}}}}},"security":[{"basicAuth":[]},{"bearerAuth":[]}],"x-codeSamples":[{"lang":"cURL","label":"CLI","source":"curl -u \\"admin:pass\\" \\\\\\n  \\"http://192.168.2.1/status\\"\\n"}]}}},"components":{"schemas":{"ZoneEntry":{"type":"object","properties":{"Name":{"description":"Unique Zone Name","type":"string","example":"vpn"},"Disabled":{"description":"If Zone is disabled","type":"bool","example":false},"ZoneTags":{"description":"Tags for Zone","type":"array","items":{"type":"string","example":["private"]}}},"xml":{"name":"Zone"}},"ZoneEntryArray":{"type":"array","items":{"$ref":"#/components/schemas/ZoneEntry"}},"DeviceEntry":{"type":"object","properties":{"Name":{"description":"Client Name","type":"string","example":"rpi4"},"MAC":{"description":"HW address","type":"string","example":"11:22:33:44:55:61"},"WGPubKey":{"description":"PubKey","type":"string","example":"pubkey"},"VLANTag":{"description":"VLANTag","type":"string","example":"vlantag"},"RecentIP":{"description":"RecentIP","type":"string","example":"192.168.2.102"},"PSKEntry":{"description":"PSK Entry","$ref":"#/components/schemas/PSKEntry"},"Zones":{"description":"Zones for device","type":"array","items":{"type":"string"},"example":["lan","dns"]},"DeviceTags":{"description":"Tags for Device","type":"array","items":{"type":"string"},"example":["private"]}},"xml":{"name":"Device"}},"DeviceEntryMap":{"type":"object","additionalProperties":{"x-additionalPropertiesName":"11:22:33:44:55:6","$ref":"#/components/schemas/DeviceEntry"}},"Interface":{"type":"object","properties":{"ifindex":{"type":"integer","example":1},"ifname":{"type":"string","example":"eth0"},"flags":{"type":"array","items":{"type":"string","example":"BROADCAST"}},"mtu":{"type":"integer","EXAMPLE":1550},"qdisc":{"type":"string","EXAMPLE":"mq"},"operstate":{"type":"string","example":"UP"},"group":{"type":"string","example":"default"},"txqlen":{"type":"integer","example":1000},"link_type":{"type":"string","example":"ether"},"address":{"description":"HW address","type":"string","example":"11:22:33:44:55:66"},"broadcast":{"description":"HW address","type":"string","example":"ff:ff:ff:ff:ff:ff"},"addr_info":{"type":"array","items":{"type":"object","properties":{"family":{"type":"string","example":"inet6"},"local":{"type":"string","example":"::1"},"prefixlen":{"type":"integer","example":64},"scope":{"type":"string","example":"link"},"valid_life_time":{"type":"integer","example":4294967295},"preferred_life_time":{"type":"integer","example":"preferred_life_time"}}}}}},"ArpEntry":{"type":"object","properties":{"IP":{"type":"string","example":"192.168.2.142"},"HWType":{"type":"string","example":"0x1"},"Flags":{"type":"string","example":"0x6"},"MAC":{"type":"string","example":"11:22:33:44:55:66"},"Mask":{"type":"string","example":"*"},"Device":{"type":"string","example":"wlan1.4097"}}},"PSKEntry":{"type":"object","properties":{"Type":{"description":"sae for WPA3 or wpa for WPA2","type":"string","enum":["sae","wpa"]},"Psk":{"description":"Password","type":"string","example":"password"}},"xml":{"name":"PSKEntry"}},"PSKAuthFailure":{"type":"object","properties":{"Type":{"type":"string","example":"sae"},"MAC":{"type":"string","pattern":"/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/","example":"11:22:33:44:55:66"},"Reason":{"type":"string","example":"mismatch"},"Status":{"type":"string","example":"Okay"}}},"PSKAuthSuccess":{"type":"object","properties":{"Iface":{"type":"string","example":"wlan1"},"Event":{"type":"string","example":"AP-STA-CONNECTED"},"MAC":{"type":"string","pattern":"/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/","example":"11:22:33:44:55:66"},"Status":{"type":"string","example":"Okay"}}},"TrafficElement":{"type":"object","properties":{"IP":{"type":"string","example":"192.168.2.1"},"Packets":{"type":"integer","example":7544},"Bytes":{"type":"integer","example":824606}}},"IPTrafficElement":{"type":"object","properties":{"Interface":{"type":"string","example":"wlan1"},"Src":{"type":"string","pattern":"/^(?:[0-9]{1,3}\\\\.){3}[0-9]{1,3}$/","example":"192.168.2.100"},"Dst":{"type":"string","pattern":"/^(?:[0-9]{1,3}\\\\.){3}[0-9]{1,3}$/","example":"192.168.2.102"},"Packets":{"type":"integer","example":1024},"Bytes":{"type":"integer","example":4096}}},"NetCount":{"type":"object","properties":{"LanIn":{"type":"integer","example":11125256532},"LanOut":{"type":"integer","example":292437928},"WanIn":{"type":"integer","example":52664},"WanOut":{"type":"integer","example":52664}}},"TrafficHistory":{"type":"object","additionalProperties":{"x-additionalPropertiesName":"192.168.2.1","$ref":"#/components/schemas/NetCount"}},"DHCPUpdate":{"type":"object","properties":{"IP":{"type":"string","pattern":"/^(?:[0-9]{1,3}\\\\.){3}[0-9]{1,3}$/","example":"192.168.2.102"},"MAC":{"type":"string","pattern":"/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/","example":"11:22:33:44:55:66"},"Name":{"type":"string","example":"rpi4"},"Iface":{"type":"string","example":"wlan1"},"Router":{"type":"string","pattern":"/^(?:[0-9]{1,3}\\\\.){3}[0-9]{1,3}$/","example":"192.168.2.1"}}},"DNSDomainOverride":{"type":"object","properties":{"Type":{"type":"string","description":"type of override (permit or block)","example":"permit","required":true},"Domain":{"type":"string","description":"domain name to override","example":"example.com","required":true},"ResultIP":{"type":"string","description":"ip to return","example":"1.2.3.4","pattern":"/^(?:[0-9]{1,3}\\\\.){3}[0-9]{1,3}$/","required":true},"ClientIP":{"type":"string","description":"target to apply to, \'*\' for all","example":"192.168.2.102","pattern":"/^(?:[0-9]{1,3}\\\\.){3}[0-9]{1,3}$/"},"Expiration":{"type":"integer","description":"if non zero has unix time for when the entry should disappear","example":0}}},"DNSListEntry":{"type":"object","properties":{"URI":{"type":"string","example":"http://asdf.com/"},"Enabled":{"type":"boolean","example":true}}},"DNSBlockMetrics":{"type":"object","properties":{"TotalQueries":{"type":"integer","example":1024},"BlockedQueries":{"type":"integer","example":512},"BlockedDomains":{"type":"integer","example":1000}}},"HostapdStatus":{"type":"object","properties":{"beacon_int":{"type":"string","example":"100"},"bss[0]":{"type":"string","example":"wlan1"},"bssid[0]":{"type":"string","example":"00:c0:ca:33:11:22"},"cac_time_left_seconds":{"type":"string","example":"N/A"},"cac_time_seconds":{"type":"string","example":"0"},"channel":{"type":"string","example":"36"},"dtim_period":{"type":"string","example":"2"},"edmg_channel":{"type":"string","example":"0"},"edmg_enable":{"type":"string","example":"0"},"freq":{"type":"string","example":"5180"},"ht_caps_info":{"type":"string","example":"01ff"},"ht_mcs_bitmask":{"type":"string","example":"ffff0000000000000000"},"ht_op_mode":{"type":"string","example":"0x6"},"ieee80211ac":{"type":"string","example":"1"},"ieee80211ax":{"type":"string","example":"0"},"ieee80211n":{"type":"string","example":"1"},"max_txpower":{"type":"string","example":"23"},"num_sta[0]":{"type":"string","example":"6"},"num_sta_ht40_intolerant":{"type":"string","example":"0"},"num_sta_ht_20_mhz":{"type":"string","example":"2"},"num_sta_ht_no_gf":{"type":"string","example":"6"},"num_sta_no_ht":{"type":"string","example":"0"},"num_sta_no_short_preamble":{"type":"string","example":"6"},"num_sta_no_short_slot_time":{"type":"string","example":"6"},"num_sta_non_erp":{"type":"string","example":"0"},"olbc":{"type":"string","example":"0"},"olbc_ht":{"type":"string","example":"0"},"phy":{"type":"string","example":"phy1"},"rx_vht_mcs_map":{"type":"string","example":"fffa"},"secondary_channel":{"type":"string","example":"1"},"ssid[0]":{"type":"string","example":"test_ap"},"state":{"type":"string","example":"ENABLED"},"supported_rates":{"type":"string","example":"0c 12 18 24 30 48 60 6c"},"tx_vht_mcs_map":{"type":"string","example":"fffa"},"vht_caps_info":{"type":"string","example":"318001b0"},"vht_oper_centr_freq_seg0_idx":{"type":"string","example":"42"},"vht_oper_centr_freq_seg1_idx":{"type":"string","example":"0"},"vht_oper_chwidth":{"type":"string","example":"1"}}},"StationInfo":{"type":"object","properties":{"AKMSuiteSelector":{"type":"string","example":"00-0f-ac-2"},"aid":{"type":"string","example":"3"},"capability":{"type":"string","example":"0x11"},"connected_time":{"type":"string","example":"4946"},"dot11RSNAStatsSTAAddress":{"type":"string","example":"11:22:33:44:55:61"},"dot11RSNAStatsSelectedPairwiseCipher":{"type":"string","example":"00-0f-ac-4"},"dot11RSNAStatsTKIPLocalMICFailures":{"type":"string","example":"0"},"dot11RSNAStatsTKIPRemoteMICFailures":{"type":"string","example":"0"},"dot11RSNAStatsVersion":{"type":"string","example":"1"},"flags":{"type":"string","example":"[AUTH][ASSOC][AUTHORIZED][WMM][HT]"},"hostapdWPAPTKGroupState":{"type":"string","example":"0"},"hostapdWPAPTKState":{"type":"string","example":"11"},"ht_caps_info":{"type":"string","example":"0x016e"},"ht_mcs_bitmask":{"type":"string","example":"ff000000000000000000"},"inactive_msec":{"type":"string","example":"1584"},"listen_interval":{"type":"string","example":"1"},"rx_bytes":{"type":"string","example":"126055"},"rx_packets":{"type":"string","example":"2394"},"rx_rate_info":{"type":"string","example":"60"},"signal":{"type":"string","example":"-85"},"supported_rates":{"type":"string","example":"8c 12 98 24 b0 48 60 6c"},"timeout_next":{"type":"string","example":"NULLFUNC POLL"},"tx_bytes":{"type":"string","example":"485584"},"tx_packets":{"type":"string","example":"1957"},"tx_rate_info":{"type":"string","example":"1200 mcs 5 shortGI"},"vlan_id":{"type":"string","example":"4247"},"wpa":{"type":"string","example":"2"}}}},"requestBodies":{"DeviceEntry":{"content":{"application/json":{"schema":{"allOf":[{"description":"My Device"},{"$ref":"#/components/schemas/DeviceEntry"}]}}},"description":"Device object","required":true},"ZoneEntry":{"content":{"application/json":{"schema":{"allOf":[{"description":"My Zone","title":"VPN"},{"$ref":"#/components/schemas/ZoneEntry"}]}}},"description":"Zone object","required":true},"PSKEntry":{"content":{"application/json":{"schema":{"allOf":[{"description":"My PSK","title":"PSK"},{"$ref":"#/components/schemas/PSKEntry"}]}}},"description":"PSKEntry object","required":true},"PSKAuthFailure":{"content":{"application/json":{"schema":{"allOf":[{"description":"My PSKAuthFailure","title":"PSK Auth Failure"},{"$ref":"#/components/schemas/PSKAuthFailure"}]}}},"description":"PSKAuthFailure object that needs to be added","required":true},"PSKAuthSuccess":{"content":{"application/json":{"schema":{"allOf":[{"description":"My PSKAuthSuccess","title":"PSK Auth Success"},{"$ref":"#/components/schemas/PSKAuthSuccess"}]}}},"description":"PSKAuthSuccess object that needs to be added","required":true},"DHCPUpdate":{"content":{"application/json":{"schema":{"allOf":[{"description":"My DHCPUpdate","title":"DHCPUpdate"},{"$ref":"#/components/schemas/DHCPUpdate"}]}}},"description":"DHCPUpdate object that needs to be added","required":true},"DNSDomainOverride":{"content":{"application/json":{"schema":{"allOf":[{"description":"My DNSDomainOverride","title":"DNSDomainOverride"},{"$ref":"#/components/schemas/DNSDomainOverride"}]}}},"description":"DNSDomainOverride object that needs to be added","required":true},"DNSListEntry":{"content":{"application/json":{"schema":{"allOf":[{"description":"My DNSListEntry","title":"DNSListEntry"},{"$ref":"#/components/schemas/DNSListEntry"}]}}},"description":"DNSListEntry object that needs to be added","required":true}},"securitySchemes":{"basicAuth":{"description":"The API supports Basic Authentication based on the auth_users file, using the Basic Schema.\\n\\nTo implement this, a client should include an \\"Authorization: Basic\\" header with the credentials formatted as `base64(username:password)`. For a javascript example, see the frontend\'s [Api.js](https://github.com/spr-networks/super/blob/main/frontend/src/components/Helpers/Api.js#L38).\\n","type":"http","scheme":"basic"},"bearerAuth":{"description":"The API also supports Bearer Tokens, based on the `auth_tokens` file.\\n\\nTo implement this, a client should include an \\"Authorization: Bearer\\" token.\\nSee [Swagger\'s page](https://swagger.io/docs/specification/authentication/bearer-authentication/) for more examples.\\n","type":"http","scheme":"bearer"}},"examples":{"DeviceEntry":{"value":{"Name":"mbp","MAC":"11:22:33:44:55:66","WGPubKey":"","VLANTag":"","RecentIP":"192.168.2.102","PskEntry":{"Type":"sae","Psk":"**"},"Zones":["wan","lan","dns"],"DeviceTags":["private"]}},"ZoneEntry":{"value":{"Name":"vpn","Disabled":false,"ZoneTags":["private"]}},"PSKEntry":{"value":{"Type":"sae","Psk":"password"}}}}}}')}}]);