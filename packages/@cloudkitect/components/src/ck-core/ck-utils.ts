/**
 * Utility class, provides several reusable methods
 */
export class CkUtils {
  /**
     * Method to convert domainName to pascal case
     * @param domainName
     */
  public static domainNameToPascalCase(domainName: string): string {
    const domainParts: string[] = domainName.split('.');
    let domain: string = '';
    for (const domainPart of domainParts) {
      domain += CkUtils.toPascalCase(domainPart);
      domain += 'Dot';
    }
    return domain.replace('-', '').slice(0, domain.lastIndexOf('Dot'));
  }

  public static toPascalCase(str: string): string {
    return str
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }

}