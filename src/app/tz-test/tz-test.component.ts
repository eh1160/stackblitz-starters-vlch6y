import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import moment from 'moment-timezone';

@Component({
  selector: 'app-tz-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tz-test.component.html',
  styleUrl: './tz-test.component.scss'
})

export class TzTestComponent {
  sampleDateTime = {
    year: 2024,
    month: 11,
    day: 22,
    hour: 3,
    minute: 45,
  };
  zones: string[] = ['Africa/Algiers', 'Africa/Cairo', 'Africa/Casablanca', 'Africa/Freetown', 'Africa/Johannesburg', 'Africa/Mogadishu', 'Africa/Nairobi', 'Africa/Windhoek', 'America/Araguaina', 'America/Aruba', 'America/Asuncion', 'America/Belem', 'America/Boa_Vista', 'America/Bogota', 'America/Buenos_Aires', 'America/Caracas', 'America/Cayenne', 'America/Cayman', 'America/Chihuahua', 'America/Costa_Rica', 'America/Curacao', 'America/Godthab', 'America/Grand_Turk', 'America/Guayaquil', 'America/Halifax', 'America/La_Paz', 'America/Lima', 'America/Managua', 'America/Manaus', 'America/Mexico_City', 'America/Miquelon', 'America/Montevideo', 'America/Noronha', 'America/Panama', 'America/Santiago', 'America/Sao_Paulo', 'America/Scoresbysund', 'America/Virgin', 'Asia/Almaty', 'Asia/Amman', 'Asia/Anadyr', 'Asia/Aqtobe', 'Asia/Baghdad', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Bishkek', 'Asia/Calcutta', 'Asia/Chongqing', 'Asia/Dacca', 'Asia/Dubai', 'Asia/Gaza', 'Asia/Hong_Kong', 'Asia/Irkutsk', 'Asia/Jakarta', 'Asia/Jayapura', 'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Karachi', 'Asia/Krasnoyarsk', 'Asia/Kuala_Lumpur', 'Asia/Kuwait', 'Asia/Macao', 'Asia/Magadan', 'Asia/Makassar', 'Asia/Manila', 'Asia/Muscat', 'Asia/Novosibirsk', 'Asia/Omsk', 'Asia/Qatar', 'Asia/Rangoon', 'Asia/Saigon', 'Asia/Seoul', 'Asia/Singapore', 'Asia/Taipei', 'Asia/Tashkent', 'Asia/Tbilisi', 'Asia/Tokyo', 'Asia/Vladivostok', 'Asia/Yekaterinburg', 'Asia/Yerevan', 'Atlantic/Azores', 'Atlantic/Stanley', 'Australia/ACT', 'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Broken_Hill', 'Australia/Darwin', 'Australia/Hobart', 'Australia/Lindeman', 'Australia/Lord_Howe', 'Australia/North', 'Australia/South', 'Australia/Sydney', 'Australia/West', 'Brazil/Acre', 'Canada/Central', 'Canada/Eastern', 'Canada/Mountain', 'Canada/Newfoundland', 'Canada/Pacific', 'Chile/EasterIsland', 'Cuba', 'Europe/Amsterdam', 'Europe/Athens', 'Europe/Belgrade', 'Europe/Bucharest', 'Europe/Dublin', 'Europe/Helsinki', 'Europe/London', 'Europe/Moscow', 'Europe/Oslo', 'Europe/Paris', 'Europe/Samara', 'Europe/Zurich', 'Greenwich', 'Iceland', 'Indian/Chagos', 'Indian/Cocos', 'Indian/Reunion', 'Iran', 'Israel', 'Jamaica', 'Mexico/BajaNorte', 'Pacific/Auckland', 'Pacific/Chatham', 'Pacific/Fakaofo', 'Pacific/Fiji', 'Pacific/Gambier', 'Pacific/Guam', 'Pacific/Kiritimati', 'Pacific/Kwajalein', 'Pacific/Marquesas', 'Pacific/Niue', 'Pacific/Norfolk', 'Pacific/Noumea', 'Pacific/Pitcairn', 'Pacific/Rarotonga', 'Pacific/Tahiti', 'Pacific/Tongatapu', 'Pacific/Wake', 'Pacific/Wallis', 'Poland', 'Portugal', 'US/Alaska', 'US/Aleutian', 'US/Arizona', 'US/Central', 'US/East-Indiana', 'US/Eastern', 'US/Hawaii', 'US/Mountain', 'US/Pacific', 'US/Samoa'];

  getDateTimeForZone(zone: string): any {
    const dateTimeTz = moment(this.sampleDateTime).tz(zone);
    return dateTimeTz.format();
  }

  // Returns "-05:00" for a given `zone` (US/Eastern) and date
  getOffset(zone: string): string {
    const dateTime = moment(this.sampleDateTime).tz(zone);
    const offset = dateTime.format('Z');

    return offset;
  }

  // returns a new copy of this.zones, sorted by the time zone offset
  sortTimeZonesByOffset(): string[] {
    const sortedZones = [...this.zones];

    return sortedZones.sort((a, b) => {
      const offsetA = moment(this.sampleDateTime).tz(a).utcOffset();
      const offsetB = moment(this.sampleDateTime).tz(b).utcOffset();
      return offsetA - offsetB;
    });
  }

}
