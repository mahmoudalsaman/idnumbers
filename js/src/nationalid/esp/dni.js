import { validateRegexp } from '../util.js';

/** Spain National ID number (Documento Nacional de Identidad) */
export class DNI {
  /** Regular expression to validate format */
  static METADATA = {
    iso3166_alpha2: 'ES',
    min_length: 9,
    max_length: 9,
    parsable: false,
    checksum: true,
    regexp: /^(\d{8})([A-Z])$/,
    alias_of: null,
    names: ['Documento Nacional de Identidad', 'DNI'],
    links: [
      'https://en.wikipedia.org/wiki/National_identification_number#Spain',
      'https://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal',
    ],
    deprecated: false,
  };

  static MAGIC_LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';

  /**
   * Validate Spain Documento Nacional de Identidad (DNI).
   * @param {string} idNumber - The national ID number to validate.
   * @returns {boolean} True if valid, false otherwise.
   */
  static validate(idNumber) {
    if (!validateRegexp(idNumber, DNI.METADATA.regexp)) {
      return false;
    }
    return DNI.checksum(idNumber);
  }

  /**
   * Checksum calculation for DNI.
   * @param {string} idNumber - The national ID number to validate.
   * @returns {boolean} True if checksum matches.
   */
  static checksum(idNumber) {
    const match = idNumber.match(DNI.METADATA.regexp);
    if (!match) {
      return false;
    }
    const digits = parseInt(match[1], 10);
    const letter = match[2];
    const index = digits % 23;
    return DNI.MAGIC_LETTERS[index] === letter;
  }
}

export const validate = (idNumber) => DNI.validate(idNumber);

